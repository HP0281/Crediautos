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
  public vehicles: Vehicle[]=[];

  public preload: boolean = false;

  constructor(private _marcasService : MarcasService, private _vehicleService: VehiclesService) {
    this.initForm();
   }

  ngOnInit(): void {
  }

  async initForm(){
    await this._marcasService.getMarcasOrden(3).then( resp =>{
      resp.subscribe(res =>{
        this.marcas = res;
        this.preload = true;
      });
      
    })
    this._vehicleService.vehicles.subscribe(resp => {
      this.vehicles = resp;
    })
  }

  count(){
    localStorage.setItem('count', JSON.stringify(0));
  }
}
