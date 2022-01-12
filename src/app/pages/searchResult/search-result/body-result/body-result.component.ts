import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo.interface';
import { Marca } from 'src/app/models/marca.interface';
import { Vehicle } from 'src/app/models/vehicle.interface';
import { MarcasService } from 'src/app/services/marcas/marcas.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-body-result',
  templateUrl: './body-result.component.html',
  styleUrls: ['./body-result.component.css']
})
export class BodyResultComponent implements OnInit {

  public marcas: Marca[]=[];
  public vehicles: Vehicle[]= JSON.parse(localStorage.getItem("vehicles"));
  public articulos: Articulo [] = JSON.parse(localStorage.getItem("articulos"));
  public vehicleAux: Vehicle [] = [];
  public filter : boolean = true;
  public showfilter= true;
  public titulo: string = JSON.parse(localStorage.getItem("categoria"));;
  preciodesde;
  preciohasta;
  limite= 12;
  desde;
  pagina=1
  public colores :any[] = [
    {colorf:"Amarillo", select:""},
    {colorf:"Azul", select:""},
    {colorf:"Beige", select:""},
    {colorf:"Blanco", select:""},
    {colorf:"Celeste", select:""},
    {colorf:"Dorado", select:""},
    {colorf:"Gris", select:""},
    {colorf:"Marrón", select:""},
    {colorf:"Morado", select:""},
    {colorf:"Naranja", select:""},
    {colorf:"Negro", select:""},
    {colorf:"Plateado", select:""},
    {colorf:"Rojo", select:""},
    {colorf:"Verde", select:""},
    {colorf:"Violeta", select:""},
    {colorf:"Multicolor", select:""}
  ]

  public preload: boolean = false;

  constructor(private _marcasService : MarcasService, private _vehicleService: VehiclesService) {
    this.initForm();
   }

  ngOnInit(): void {
    let count = JSON.parse(localStorage.getItem('count'));
    if (count < 1) {
      localStorage.setItem('count', JSON.stringify(1));
      window.location.reload();
    }else{
      this.preload = true;
      this.count();
    }
    this.vehicleAux = this.vehicles;
    if (this.vehicles.length > 0) {
      this.filter = true;
      
    } else {
      this.filter = false;
    }
    
    
  }

  initForm(){
    this._marcasService.getMarcasOrden(3, this.titulo).then( resp =>{
      resp.subscribe(res =>{
        this.marcas = res;
        
      });
      
    })
  }

  count(){
    localStorage.setItem('count', JSON.stringify(0));
  }

  colorF(colorf : any){
    this.vehicles = this.vehicleAux.filter(elemnt => {
      return elemnt.color == colorf.colorf;
    })
    this.colores.forEach(resp =>{
      if (resp.colorf == colorf.colorf) {
        resp.select = "active-filter";
      } else {
        resp.select = "";
      }
    })
  }
  marcaF(marcaf : Marca){
    this._vehicleService.getVehicleByMarcaByCategoria(marcaf.name, this.titulo).subscribe(resp =>{
      this.vehicles = resp;
    });
    this.marcas.forEach(resp =>{
      if (resp.name == marcaf.name) {
        resp.select = "active-filter";
      } else {
        resp.select = "";
      }
    })
  }
  
  precioFilter(){
    if (this.preciohasta>0) {
      this.vehicles = this.vehicleAux.filter(element => element.valor>=this.preciodesde && element.valor<=this.preciohasta);
   } else {
     this.vehicles = this.vehicleAux;
   }
  }
}
