import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  activas:number;
  pausadas:number;
  finalizadas:number;

  constructor(private vehicleSv: VehiclesService) { 
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
