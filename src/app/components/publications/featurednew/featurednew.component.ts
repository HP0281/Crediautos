import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-featurednew',
  templateUrl: './featurednew.component.html',
  styleUrls: ['./featurednew.component.css']
})
export class FeaturednewComponent implements OnInit {

  vehicles:any[];
  constructor(private vehicleService: VehiclesService) {
    this.getVehicles();
   }

  ngOnInit(): void {
    this.scrollSlide();
  }
  scrollSlide(){
    const filan = document.querySelector('.contenedor-carrousel-n');
    const anchon = document.querySelector('.contenedor-carrousel-n').clientWidth;
    const publicaciones = document.querySelector('.publicacion-n');
    const flechaizquierdan = document.querySelector('.flecha-izquierda-n');
    const flechaderechan = document.querySelector('.flecha-derecha-n');
    console.log(anchon);
    flechaizquierdan.addEventListener('click', () => {
    filan.scrollLeft -= anchon;
    console.log('clickizuiqerda');
    });

    flechaderechan.addEventListener('click', () => {
    filan.scrollLeft += anchon;
    });
    
  }

  getVehicles(){
    this.vehicleService.getVehicleByKilometraje(0,0, true) .subscribe((resp:any)=>{
      this.vehicles = resp;
      console.log("0km",this.vehicles)
    })
  }
  count(){
    localStorage.setItem('count', JSON.stringify(0));
  }
}
