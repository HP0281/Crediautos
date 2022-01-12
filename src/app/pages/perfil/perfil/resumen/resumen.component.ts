import { Component, OnInit } from '@angular/core';
import { Preguntas } from 'src/app/models/preguntas.inteface';
import { PreguntasService } from 'src/app/services/preguntas/preguntas.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  public preguntas: Preguntas[];

  
  activas:number;
  pausadas:number;
  finalizadas:number;

  constructor(private vehicleSv: VehiclesService, private _preguntaService: PreguntasService) { 
    this._preguntaService.preguntas.subscribe(resp => {
      resp = this.preguntas;
      console.log(resp)
      
    })
    this.getCount();
  }

  ngOnInit(): void {
  }

  getCount(){
    this.vehicleSv.getVehiclesByIdState(localStorage.getItem('userid'), 'activa').subscribe(resp=>{
      this.activas = resp.length;
    })
    this.vehicleSv.getVehiclesByIdState(localStorage.getItem('userid'), 'creado').subscribe(resp=>{
      this.pausadas = resp.length;
    })
    this.vehicleSv.getVehiclesByIdState(localStorage.getItem('userid'), 'finalizada').subscribe(resp=>{
      this.finalizadas = resp.length;
    })
  }
}
