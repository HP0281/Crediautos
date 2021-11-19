import { Component, OnInit } from '@angular/core';
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
  public vehicles: Vehicle[]= JSON.parse(localStorage.getItem("vehicles")) ;
  public vehicleAux: Vehicle [] = [];
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
    this.vehicleAux = this.vehicles;
  }

  async initForm(){
    await this._marcasService.getMarcasOrden(3).then( resp =>{
      resp.subscribe(res =>{
        this.marcas = res;
        this.preload = true;
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
  
}
