import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.interface';
import { Marca } from 'src/app/models/marca.interface';
import { Modelo } from 'src/app/models/modelo.interface';
import { Vehicle } from 'src/app/models/vehicle.interface';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
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
  modelos: Modelo[] = [];
  public ismodelo = true;
  public buscarf: FormGroup;
  colum = "col-md-4";
  showContent = true;
  articulo = false;
  precioDesde: number [] = [1000000,2000000,3000000,4000000,5000000,6000000,7000000,8000000,9000000,10000000,20000000,30000000,40000000,50000000,60000000,70000000,80000000,90000000,100000000,200000000];
  precioHasta: number [] = [1000000,2000000,3000000,4000000,5000000,6000000,7000000,8000000,9000000,10000000,20000000,30000000,40000000,50000000,60000000,70000000,80000000,90000000,100000000,200000000]
  precioFilter: number [];
  constructor(private router: Router, private categoriesService: CategoriesService,
    private marcasService: MarcasService, private _vehicleService: VehiclesService,
    private _articuloService: ArticuloService,
    private fb: FormBuilder,
    private _modeloSevice: ModelosService) {
      this.precioFilter = this.precioHasta;
    this.getCategories();
  }

  ngOnInit(): void {
    this.buscarf = this.fb.group({
      marca: new FormControl('all', [Validators.required]),
      modelo: new FormControl('all'),
      categoria: new FormControl('Carros y Camionetas'),
      articulo: new FormControl('all'),
      preciodesde: new FormControl(0),
      preciohasta: new FormControl(0)
    })
    this.hasta();
    this.getMarcas();
  }

  buscar() {
    localStorage.setItem('count', JSON.stringify(0));
    let marca= this.buscarf.get('marca').value;
    let modelo= this.buscarf.get('modelo').value;
    let categoria: string = this.buscarf.get('categoria').value;
    let articulo: string = this.buscarf.get('articulo').value;
    let desde: number = parseInt(this.buscarf.get('preciodesde').value);
    let hasta: number = parseInt(this.buscarf.get('preciohasta').value); 
    console.log("cate", categoria, modelo, marca,desde,hasta);
    localStorage.setItem('categoria', JSON.stringify(categoria));
    console.log("marca", marca);
    if (categoria == "Carros y Camionetas" || categoria == "Motos" || categoria == "Camiones") {
      console.log("entra carros")
      if (marca != 'all' && modelo != 'all') {
        this._vehicleService.getVehicleByCategoriaBYMarcaByModelo(categoria, marca, modelo).subscribe(resp => {
          let vehicle
          if (hasta>0) {
             vehicle = resp.filter(element => (element.valor<=hasta && element.valor>=desde));
          } else {
            vehicle = resp;
          }
          localStorage.setItem('vehicles', JSON.stringify(vehicle));
          console.log("filtro marca, modelo", vehicle)
          this.router.navigate(['/buscar']);
        });
      } else if (marca != 'all') {
        this._vehicleService.getVehicleByMarca(marca).subscribe(resp => {
          let vehicles
          if (hasta>0) {
             vehicles = resp.filter(element => (element.valor<=hasta && element.valor>=desde));
          } else {
            vehicles = resp.filter(element => ( element.valor>=desde));
          }
          localStorage.setItem('vehicles', JSON.stringify(vehicles));
          console.log("filtro marca", vehicles)
          this.router.navigate(['/buscar']);
        });
      } else if (marca == 'all') {
        this._vehicleService.getVehicleByCategoria(categoria,12,1).subscribe(resp => {
          let vehicles
          if (hasta>0) {
             vehicles = resp.filter(element => element.valor>=desde && element.valor<=hasta);
          } else {
            vehicles = resp.filter(element => element.valor>=desde);
          }
          localStorage.setItem('vehicles', JSON.stringify(vehicles));
          localStorage.setItem('articulos', JSON.stringify(""));
          console.log("filtro todass marca", vehicles)
          this.router.navigate(['/buscar']);
        });
      }
    } else if (categoria == "Articulos") {
      this._articuloService.getArticuloByCategory(articulo).subscribe(art => {
        let vehicles
          if (hasta>0) {
             vehicles = art.filter(element => element.valor>=desde && element.valor<=hasta);
          } else {
            vehicles = art.filter(element => element.valor>=desde);
          }
        localStorage.setItem('articulos', JSON.stringify(vehicles));
        localStorage.setItem('vehicles', JSON.stringify(""));
        console.log("articulo", vehicles)
        this.router.navigate(['/buscar']);
      });
    } else {

    }



  }
  filtarMarca(event) {
    let categoria: string = this.buscarf.get('categoria').value;
    if (categoria == "Carros y Camionetas" || categoria == "Motos" || categoria == "Camiones") {
      this.colum = "col-md-4";
      this.showContent = true;
      this.articulo = false;
      this.getMarcas();
    } else if (categoria == "Articulos") {
      this.buscarf.get('marca').setValue('all');
      this.buscarf.get('modelo').setValue('all');
      this.colum = "col-md-6";
      this.showContent = false;
      this.articulo = true;
      this.marcas = [];
      this.modelos = [];
    } else {
      this.buscarf.get('marca').setValue('all');
      this.buscarf.get('modelo').setValue('all');
      this.buscarf.get('articulo').setValue('all');
      this.colum = "col-md-12";
      this.showContent = false;
      this.articulo = false;
      this.marcas = [];
      this.modelos = [];
    }

  }
  filtroModelo() {
    let marca: string = this.buscarf.get('marca').value;
    let categoria: string = this.buscarf.get('categoria').value;
    if (marca == 'all') {
      this.ismodelo = true;
      this.modelos = [];

    } else {
      this._modeloSevice.getModelosforMarcaByCategoria(marca,categoria).subscribe(resp => {
        this.modelos = resp;
        this.ismodelo = false;
      })
    }

  }
  getCategories() {
    this.categoriesService.categories.subscribe((res: any) => this.categorias = res,
      (err: any) => console.error('ha ocurrido un error'));
  }
  getMarcas() {
    console.log("entra al get")
    let c = this.buscarf.get('categoria').value;
    this.marcasService.getMarcaByCategoria(c).subscribe((res: any) => {
      this.marcas = res, console.log(res);
    },
      (err: any) => console.error('ha ocurrido un error'));

  }
  hasta(){
    let desde: number = this.buscarf.get('preciodesde').value
    this.precioFilter= this.precioHasta.filter(element => element>=desde );
  }
}