import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.interface';
import { Marca } from 'src/app/models/marca.interface';
import { Modelo } from 'src/app/models/modelo.interface';
import { Vehicle } from 'src/app/models/vehicle.interface';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { MarcasService } from 'src/app/services/marcas/marcas.service';
import { ModelosService } from 'src/app/services/modelos/modelos.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  categorias: Category[];
  marcas: Marca[];
  modelos: Modelo []=[];
  public ismodelo = true;
  public buscarf: FormGroup;

  constructor(private router: Router, private categoriesService: CategoriesService,
    private marcasService: MarcasService, private _vehicleService: VehiclesService,
   private fb : FormBuilder,
     private _modeloSevice : ModelosService) { 
      this.getCategories();
      this.getMarcas();

    }

  ngOnInit(): void {
    this.buscarf = this.fb.group({
      marca : new FormControl('all', [Validators.required]),
      modelo : new FormControl('all'),
      categoria : new FormControl('Carros y Camionetas')
    })
  }

  buscar(){
    let marca: string = this.buscarf.get('marca').value;
    let modelo: string = this.buscarf.get('modelo').value;
    let categoria: string = this.buscarf.get('categoria').value;
    if (marca != 'all' && modelo !='all') {
      this._vehicleService.getVehicleByCategoriaBYMarcaByModelo(categoria, marca, modelo).subscribe(resp =>{
        let vehicle = resp;
        localStorage.setItem('vehicles', JSON.stringify(vehicle));
        console.log("filtro marca", vehicle)
        this.router.navigate(['/buscar']);
      });
    } else if(marca != 'all') {
      this._vehicleService.getVehicleByMarca(marca).subscribe(vehicles => {
        localStorage.setItem('vehicles', JSON.stringify(vehicles));
        console.log("filtro marca", vehicles)
        this.router.navigate(['/buscar']);
      });
    } else if(marca == 'all'){
      this._vehicleService.getVehicleByCategoria(categoria).subscribe(vehicles => {
        localStorage.setItem('vehicles', JSON.stringify(vehicles));
        console.log("filtro marca", vehicles)
        this.router.navigate(['/buscar']);
      });
    }
  
    
  }
  filtarMarca(){
    let categoria: string = this.buscarf.get('categoria').value;
   this.marcasService.getMarcaByCategoria(categoria).subscribe(resp =>{
    this.marcas = resp;
   })
    
  }
  filtroModelo (){
    let marca: string = this.buscarf.get('marca').value;
    if (marca == 'all') {
      this.ismodelo= true;
      this.modelos = [];
    } else {
      this._modeloSevice.getModelosforMarca(marca).subscribe(resp =>{
        this.modelos = resp;
        this.ismodelo= false;
      })
    }
    
  }
  getCategories(){
    this.categoriesService.categories.subscribe((res:any) => this.categorias = res,
    (err:any) => console.error('ha ocurrido un error'));
  }
  getMarcas(){
    this.marcasService.marcas.subscribe((res:any) => {
      this.marcas = res, console.log(res);},
    (err:any) => console.error('ha ocurrido un error'));

  }
}
