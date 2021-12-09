import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.interface';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  expanded = false;
  vehicles:any[];

  constructor(private vehiclesSv: VehiclesService) {
    this.vehiclesSv.getVehiclesById(localStorage.getItem('userid')).subscribe(resp=>{
      this.vehicles = resp;
    })
   }

  ngOnInit(): void {
  }
  onClick(){
    this.expanded = !this.expanded;
  }

}
