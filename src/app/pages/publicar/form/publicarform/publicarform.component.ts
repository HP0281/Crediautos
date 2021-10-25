import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/models/vehicle.interface';
import { VehicleInfo } from 'src/app/models/vehicleInfo.interface ';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { MarcasService } from 'src/app/services/marcas/marcas.service';
import { VehicleInfoService } from 'src/app/services/vehicle/vehicle-info.service';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-publicarform',
  templateUrl: './publicarform.component.html',
  styleUrls: ['./publicarform.component.css']
})
export class PublicarformComponent implements OnInit {
  
  paso:number;
  progreso:number;
  category:string;
  marca: string;
  modelo:string;
  year:string;
  version: string;

  vehicleForm: FormGroup; 
  kilometrajeForm: FormGroup; 
  colorForm: FormGroup;
  formPrincipal: FormGroup;
  valorform: FormGroup;

  vehicle: Vehicle;

  headers: string[];
  categories: String[];
  marcas:string[];
  modelos:string[];
  years : any[];
  versions : string[];
  
  cargo:boolean = false;

  uploadProgress: Observable<number>;
  uploadURL: Observable<string>;
  

  constructor(private fb: FormBuilder, public vehicleService: VehiclesService, private router: Router, private auth: AuthService,
    private categoryService: CategoriesService,
    private marcasService: MarcasService,
    private vehicleInfoService: VehicleInfoService,
    private _storage: AngularFireStorage ) { 
    const navigation = router.getCurrentNavigation();
    this.vehicle = navigation.extras?.state?.value;
    this.initForm();
    console.log(auth._userinfo);
    this.paso = 1;
    this.progreso=0;
    this.headers=['pqr'];
    this.getCategories();
    this.getMarcas();
    this.years =[];
   
  }

  ngOnInit(): void {
    if (typeof this.vehicle ==='undefined') {
     // this.router.navigate(['publicarForm']);
    }else{
      this.formPrincipal.patchValue(this.vehicle);
    }
  }
  onContinue(paso:string){
    switch (paso) {
      case 'titulo':
        if (this.vehicleForm.valid) {
          this.progreso++;
        }
        break;
        case 'category':
        if (this.category) {
          this.progreso++;
        }
        break;
        case 'marca':
          if(this.marca){
            this.progreso++;
            this.getModelos(this.marca);
            this.getVehicles(this.auth._userinfo.uid);
        }
        break;
      case 'modelo':
        if(this.modelo){
          this.progreso++;
          this.initYears();
        }
        break;
      case 'año':
        if (this.year) {
          this.progreso++;
          this.getVersions(this.marca, this.modelo);
        }
        break;
      case 'version':
        if(this.version){
          this.progreso++;
        }
        break;
      case 'kilometraje':
        if (this.kilometrajeForm.get('kilometraje').value) {
          this.progreso++;
        }
        break;
      case 'color':
        if (this.colorForm.get('color').value) {
          this.progreso++;
          this.paso++;
          this.patchvalues();
        }
      case 'valor':
        console.log(this.valorform.get('valor').value)
        if(this.valorform.get('valor').value){
          this.progreso++;
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
  
  onMarca(marca: string){
    this.marca = marca;
    this.onContinue('marca');
  }

  onModelo(modelo: string){
    this.modelo = modelo;
    this.onContinue('modelo');
  }
  
  onYear(year:string){
    this.year = year;
    this.onContinue('año');
  }

  onVersion(version: string){
    this.version = version;

  }
  initForm(){
    this.valorform = this.fb.group({
      valor : new FormControl('', [Validators.required])
    })
    this.vehicleForm = this.fb.group({
      marcamodelo : new FormControl('', [Validators.required])
    })
    this.kilometrajeForm = this.fb.group({
      kilometraje: new FormControl('', [Validators.required])
    })
    this.colorForm = this.fb.group({
      color: new FormControl('',[Validators.required])
    })
    this.formPrincipal = this.fb.group({
      marca: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      version: new FormControl('', [Validators.required]),
      tcombustible: new FormControl('', [Validators.required]),
      puertas: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      trasmision: new FormControl('', [Validators.required]),
      traccion: new FormControl('', [Validators.required]),
      motor: new FormControl('', [Validators.required]),
      carroceria: new FormControl('', [Validators.required]),
      cilindrada: new FormControl('', [Validators.required]),
      placa: new FormControl('', [Validators.required]),
      vendedor: new FormControl(''),
      urlimg:new FormControl(''),
      unicodueño: new FormControl(''),
      tecno: new FormControl(''),
      seguro: new FormControl('', ),
      gps: new FormControl(''),
      asientotabatible: new FormControl(''),
      techocorredizo: new FormControl(''),
      climatizador: new FormControl(''),
      portaequipajet: new FormControl(''),
      camarareversa: new FormControl(''),
      banca: new FormControl(''),
      abs: new FormControl(''),
      alarma: new FormControl(''),
      exploradorasd: new FormControl(''),
      airbag: new FormControl(''),
      sensorlluvia: new FormControl(''),
      exploradorast: new FormControl(''),
      desempañadort: new FormControl(''),
      barraantivuelco: new FormControl(''),
      ctrestabilidad: new FormControl(''),
      blindado: new FormControl(''),
      vidrioseg: new FormControl(''),
      aireacondicionado: new FormControl(''),
      regalturavolante: new FormControl(''),
      retrovisorelectrico: new FormControl(''),
      luzregautomatica: new FormControl(''),
      tapizadocuero: new FormControl(''),
      tapizadosemicuero: new FormControl(''),
      tapizadotela: new FormControl(''),
      sensorparqueo: new FormControl(''),
      vidrioselect: new FormControl(''),
      baulremoto: new FormControl(''),
      asientoelectricos: new FormControl(''),
      puertascentralizado: new FormControl(''),
      manuales: new FormControl(''),
      cierrevidriosauto: new FormControl(''),
      bluetooth: new FormControl(''),
      dvd: new FormControl(''),
      repmp3: new FormControl(''),
      entradausb: new FormControl(''),
      eds: new FormControl(''),
      cubiertaplaton: new FormControl(''),
      plana: new FormControl(''),
      estribos: new FormControl(''),
      exploradoras: new FormControl(''),
      llantasn: new FormControl(''),
      rineslujo: new FormControl(''),
      spoiler: new FormControl(''),
      garfabrica: new FormControl(''),
      garmecanica: new FormControl(''),
      negociable: new FormControl(''),
      venpermuta: new FormControl(''),
      domicilio: new FormControl(''),
      testdrivD: new FormControl(''),
      dochome: new FormControl(''),
      desc: new FormControl(''),
      valor : new FormControl('')
      
    })
  }
  asignarvalue(nomvar: string, valor: any){
    switch (nomvar) {
      case 'unicodue':  this.formPrincipal.get('unicodueño').setValue(valor);  break;
      case 'tecno':  this.formPrincipal.get('tecno').setValue(valor);  break;
      case 'seguro':  this.formPrincipal.get('seguro').setValue(valor);  break;
      case 'gps':  this.formPrincipal.get('gps').setValue(valor);  break;
      case 'asientotabatible':  this.formPrincipal.get('asientotabatible').setValue(valor);  break;
      case 'techocorredizo':  this.formPrincipal.get('techocorredizo').setValue(valor);  break;
      case 'climatizador':  this.formPrincipal.get('climatizador').setValue(valor);  break;
      case 'portaequipajet':  this.formPrincipal.get('portaequipajet').setValue(valor);  break;
      case 'camarareversa':  this.formPrincipal.get('camarareversa').setValue(valor);  break;
      case 'banca':  this.formPrincipal.get('banca').setValue(valor);  break;
      case 'abs':  this.formPrincipal.get('abs').setValue(valor);  break;
      case 'alarma':  this.formPrincipal.get('alarma').setValue(valor);  break;
      case 'exploradorasd':  this.formPrincipal.get('exploradorasd').setValue(valor);  break;
      case 'airbag':  this.formPrincipal.get('airbag').setValue(valor);  break;
      case 'sensorlluvia':  this.formPrincipal.get('sensorlluvia').setValue(valor);  break;
      case 'exploradorast':  this.formPrincipal.get('exploradorast').setValue(valor);  break;
      case 'desempañadort':  this.formPrincipal.get('desempañadort').setValue(valor);  break;
      case 'barraantivuelco':  this.formPrincipal.get('barraantivuelco').setValue(valor);  break;
      case 'ctrestabilidad':  this.formPrincipal.get('ctrestabilidad').setValue(valor);  break;
      case 'blindado':  this.formPrincipal.get('blindado').setValue(valor);  break;
      case 'aireacondicionado':  this.formPrincipal.get('aireacondicionado').setValue(valor);  break;
      case 'vidrioseg':  this.formPrincipal.get('vidrioseg').setValue(valor);  break;
      case 'regalturavolante':  this.formPrincipal.get('regalturavolante').setValue(valor);  break;
      case 'retrovisorelectrico':  this.formPrincipal.get('retrovisorelectrico').setValue(valor);  break;
      case 'luzregautomatica':  this.formPrincipal.get('luzregautomatica').setValue(valor);  break;
      case 'tapizadocuero':  this.formPrincipal.get('tapizadocuero').setValue(valor);  break;
      case 'tapizadosemicuero':  this.formPrincipal.get('tapizadosemicuero').setValue(valor);  break;
      case 'tapizadotela':  this.formPrincipal.get('tapizadotela').setValue(valor);  break;
      case 'sensorparqueo':  this.formPrincipal.get('sensorparqueo').setValue(valor);  break;
      case 'vidrioselect':  this.formPrincipal.get('vidrioselect').setValue(valor);  break;
      case 'baulremoto':  this.formPrincipal.get('baulremoto').setValue(valor);  break;
      case 'asientoelectricos':  this.formPrincipal.get('asientoelectricos').setValue(valor);  break;
      case 'puertascentralizado':  this.formPrincipal.get('puertascentralizado').setValue(valor);  break;
      case 'manuales':  this.formPrincipal.get('manuales').setValue(valor);  break;
      case 'cierrevidriosauto':  this.formPrincipal.get('cierrevidriosauto').setValue(valor);  break;
      case 'bluetooth':  this.formPrincipal.get('bluetooth').setValue(valor);  break;
      case 'dvd':  this.formPrincipal.get('dvd').setValue(valor);  break;
      case 'repmp3':  this.formPrincipal.get('repmp3').setValue(valor);  break;
      case 'entradausb':  this.formPrincipal.get('entradausb').setValue(valor);  break;
      case 'eds':  this.formPrincipal.get('eds').setValue(valor);  break;
      case 'cubiertaplaton':  this.formPrincipal.get('cubiertaplaton').setValue(valor);  break;
      case 'plana':  this.formPrincipal.get('plana').setValue(valor);  break;
      case 'estribos':  this.formPrincipal.get('estribos').setValue(valor);  break;
      case 'exploradoras':  this.formPrincipal.get('exploradoras').setValue(valor);  break;
      case 'llantasn':  this.formPrincipal.get('llantasn').setValue(valor);  break;
      case 'rineslujo':  this.formPrincipal.get('rineslujo').setValue(valor);  break;
      case 'spoiler':  this.formPrincipal.get('spoiler').setValue(valor);  break;
      case 'garfabrica':  this.formPrincipal.get('garfabrica').setValue(valor);  break;
      case 'garmecanica':  this.formPrincipal.get('garmecanica').setValue(valor);  break;
      case 'negociable':  this.formPrincipal.get('negociable').setValue(valor);  break;
      case 'venpermuta':  this.formPrincipal.get('venpermuta').setValue(valor);  break;
      case 'domicilio':  this.formPrincipal.get('domicilio').setValue(valor);  break;
      case 'testdrivD':  this.formPrincipal.get('testdrivD').setValue(valor);  break;
      case 'dochome':  this.formPrincipal.get('dochome').setValue(valor);  break;
      case 'marca' : this.formPrincipal.get('marca').setValue(valor); break;
      case 'modelo' : this.formPrincipal.get('modelo').setValue(valor); break;
      case 'year' : this.formPrincipal.get('year').setValue(valor); break;
      case 'puertas' : this.formPrincipal.get('puertas').setValue(valor); break;
      case 'version' : this.formPrincipal.get('version').setValue(valor); break;
      case 'modelo' : this.formPrincipal.get('modelo').setValue(valor); break;
      case 'urlimg' : this.formPrincipal.get('urlimg').setValue(valor); break;
      case 'desc' : this.formPrincipal.get('desc').setValue(valor); break;
      case 'valor' : this.formPrincipal.get('valor').setValue(valor); break;
      default:
        break;
      }
      console.log(this.formPrincipal.get('unicodueño').value);
  }
  onguardar(){
    if (this.formPrincipal.valid) {
      const vehicle = this.formPrincipal.value;
      const vehicleid = this.vehicle?._id || null;
      this.vehicleService.onSaveVehicle(vehicle, vehicleid);
      //this.vehicleInfoService.onSaveVehicle(vehicle, vehicleid );
      alert('registro creado correctamente');
      this.router.navigate['/inicio'];
    }
    
  }
  onLogout(){
    this.auth.logOut();
  }
  patchvalues(){
    this.asignarvalue('marca', this.marca);
    this.asignarvalue('modelo', this.modelo);
    this.asignarvalue('version', this.version );
    this.asignarvalue('year', this.year);
    this.asignarvalue('vendedor', this.auth._userinfo.uid);
    
    this.asignarvalue('desc', this.vehicleForm.get('marcamodelo').value);
  }
  getCategories(){
    this.categoryService.categories.subscribe((resp:any)=>{
      this.categories = resp;
      console.log(this.categories)
    })
  }
  getMarcas(){
    this.marcasService.marcas.subscribe((resp:any)=>{
      this.marcas = resp;
    })
  }
  getModelos(marca:string){
    console.log('resultado marcas');
    this.vehicleInfoService.getVehiclesforMarca(marca).subscribe((resp:any)=>{
      console.log(resp);
      this.modelos = resp;
    })
  }
  getVersions(marca:string,modelo:string){
    this.vehicleInfoService.getVehiclesforMarcaModelo(marca, modelo).subscribe(
      (resp:any) => {
        this.versions = resp;
      }
    )
  }
  getVehicles(id:string){
    this.vehicleService.getVehiclesById(id).subscribe((resp:any)=>{
      console.log(resp);
    })
  }
  initYears(){
    let yearact = 2022;
    for (let index = 0; index < 30; index++) {
      this.years.push({"year": yearact});
      yearact--;
      
    }
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
}
