import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { MarcasService } from 'src/app/services/marcas/marcas.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { ModelosService } from 'src/app/services/modelos/modelos.service';
import { VersionesService } from 'src/app/services/versiones/versiones.service';
import { FileItem } from 'src/app/models/file-item';
import { ImageService } from 'src/app/services/image/image.service';
import { Image } from 'src/app/models/image.interface';
import * as _ from 'lodash';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
import { Articulo } from 'src/app/models/articulo.interface';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  paso:number;
  progreso:number;
  category:string;
  marca: string;
  modelo:string;
  year:string;
  version: string;

  articuloForm: FormGroup; 
  kilometrajeForm: FormGroup; 
  formPrincipal: FormGroup;
  valorform: FormGroup;

  articulo: Articulo;

  headers: string[];
  categories: string[];
  marcas:string[];
  modelos:string[];
  years : any[];
  versions : string[];
  
  cargo:boolean = false;
  cargoI:boolean = false;

  uploadProgress: Observable<number>;
  uploadURL: Observable<string>;

  files: FileItem[] = [];
  isOverDrop = false;

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string = "";

  navigatiionExtras : NavigationExtras = {
    state:{
      value:null,
      isVehiculo: false
    }
  }

  

  constructor(private fb: FormBuilder, public articuloService: ArticuloService, 
    private router: Router, 
    private auth: AuthService,
    private categoryService: CategoriesService,
    private marcasService: MarcasService,
    private modelosService: ModelosService,
    private versionService: VersionesService,
    private readonly storageSvc: ImageService,
    private _storage: AngularFireStorage ) { 
    const navigation = router.getCurrentNavigation();
    this.articulo = navigation.extras?.state?.value;
    this.initForm();
    console.log(auth._userinfo);
    this.paso = 1;
    this.progreso=0;
    this.headers=['pqr'];
    this.getCategories();
    this.years =[];


   
  }

  ngOnInit(): void {
    if (typeof this.articulo ==='undefined') {
     // this.router.navigate(['publicarForm']);
    }else{
      this.formPrincipal.patchValue(this.articulo);
    }
  }
  onContinue(paso:string){
    switch (paso) {
      case 'titulo':
        if (this.articuloForm.valid) {
          this.progreso++;
        }
        break;
        case 'category':
        if (this.category) {
          this.progreso++;
          
        }
        break;
        
      case 'valor':
        console.log(this.valorform.get('valor').value)
        if(this.valorform.get('valor').value){
          this.progreso++;
          this.patchvalues();
          this.asignarvalue('valor', this.valorform.get('valor').value);
        }
        break;
      case 'principal':
        
          this.progreso++;
          break;
          case 'img':
            // this.uploadURL.subscribe((resp:any)=>{
            //   this.asignarvalue('urlimg', resp);
            // })
            this.progreso++;
            break;
            default:
        break;
      }
  }
  onCategory(category:string){
    this.category = category;
    this.onContinue('category');
  }
  
  
  initForm(){
    this.valorform = this.fb.group({
      valor : new FormControl('', [Validators.required])
    })
    this.articuloForm = this.fb.group({
      name : new FormControl('', [Validators.required]),
      descripcion : new FormControl('', [Validators.required])
    })
    this.formPrincipal = this.fb.group({
      name: new FormControl("", [Validators.required]),
      vendedor: new FormControl(JSON.parse(localStorage.getItem('nombre'))),
      categoria: new FormControl('Articulos'),
      urlimg:new FormControl(''),
      desc: new FormControl(''),
      valor : new FormControl(''),
      status: new FormControl(false),
      state: new FormControl('creado'),
      promocion: new FormControl(false)
    })
  }
  asignarvalue(nomvar: string, valor: any){
    switch (nomvar) {
      case 'urlimg' : this.formPrincipal.get('urlimg').setValue(valor); break;
      case 'desc' : this.formPrincipal.get('desc').setValue(valor); break;
      case 'valor' : this.formPrincipal.get('valor').setValue(valor); break;
      case 'categoria' : this.formPrincipal.get('categoria').setValue(valor); break;
      case 'name' : this.formPrincipal.get('name').setValue(valor); break;
      default:
        break;
      }
  }
  async onguardar() {
    if (this.files.length>0 && this.cargoI) {
      if (this.formPrincipal.valid) {
        const articulo = this.formPrincipal.value;
        const articuloid = this.articulo?.id || null;
        await this.articuloService.onSaveArticulo(articulo, articuloid);
        let id = JSON.parse(localStorage.getItem('idArticulo'));
          for (let index = 0; index < this.files.length; index++) {
            let url;
            console.log("id articulo", id);
            await this.fileChangeEvent(this.files[index].fileActual);
            this.files[index].downloadURL.subscribe( async Url => {
              let img : Image = {idvehicle: id, urlimg: Url}
            const imageid = img?.id || null;
            console.log("antes del s", img , imageid, url);
            await this.storageSvc.onSaveImage(img, imageid);
            })
            
          }
          this.redirecto(); 
          this.navigatiionExtras.state.value = articulo;
          this.router.navigate(['/userInfo'], this.navigatiionExtras);
        alert('registro creado correctamente');
        
      }
    } else {
      alert('No sean cargado las fotos de tu vehículo');
    }
    
    
  }
  redirecto(){
    this.router.navigate(['/inicio']);
  }
  fileChangeEvent(fileInput: any) {
    console.log("entra al 64", fileInput)
    this.imageError = null;
    if (fileInput) {
      console.log("entra al if")
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;

        if (fileInput.size > max_size) {
            this.imageError =
                'Maximum size allowed is ' + max_size / 1000 + 'Mb';

            return false;
        }

        if (!_.includes(allowed_types, fileInput.type)) {
            this.imageError = 'Only Images are allowed ( JPG | PNG )';
            return false;
        }
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                console.log(img_height, img_width);


                if (img_height > max_height && img_width > max_width) {
                    this.imageError =
                        'Maximum dimentions allowed ' +
                        max_height +
                        '*' +
                        max_width +
                        'px';
                    return false;
                } else {
                    const imgBase64Path = e.target.result;
                    this.isImageSaved = true;
                    return this.cardImageBase64 = imgBase64Path;
                    // this.previewImagePath = imgBase64Path;
                }
            };
        };

        reader.readAsDataURL(fileInput);
    }
}
  onUpload(): void {
    this.storageSvc.uploadImage(this.files);
    this.cargoI = true;
  }
  onLogout(){
    this.auth.logOut();
  }
  patchvalues(){
    this.asignarvalue('categoria', this.category);
    this.asignarvalue('name', this.articuloForm.get('name').value);
    this.asignarvalue('desc', this.articuloForm.get('descripcion').value);
  }
  getCategories(){
      this.categories = [
        "Carros y Camionetas",
        "Motos",
        "Camiones"
      ]
  }
  
  getArticulos(id:string){
    this.articuloService.getArticulosById(id).subscribe((resp:any)=>{
      console.log(resp);
    })
  }
  uploadImg(event){
    const file = event.target.files[0];
    const randomId = Math.random().toString(36).substring(2);
    const filepath = `images/${randomId}`;
    const fileref = this._storage.ref(filepath);
    const task = this._storage.upload(filepath, file);
    this.uploadProgress = task.percentageChanges();
    
    task.snapshotChanges().pipe(
      finalize(() => {this.uploadURL = fileref.getDownloadURL();
      this.cargo = true;
      this.uploadURL.subscribe((resp:any)=>{

        this.asignarvalue('urlimg', resp);
      })
    }
      )
    ).subscribe();
    this.onContinue('img');
  }
  uploadImgs(event){
    const file = event.target.files;
    for (let index = 0; index < file.length; index++) {
      const randomId = Math.random().toString(36).substring(2);
      const filepath = `images/${randomId}`;
      let newfile: FileItem = new FileItem(file[index]);
      this.files.push(newfile);
    }
    
  }
  back(opt: string){
    switch (opt) {
      case 'marca':
        this.progreso = 2;
        break;
      case 'categoria':
        this.progreso = 1;
        break;
      default:
        break;
    }
  }


}
