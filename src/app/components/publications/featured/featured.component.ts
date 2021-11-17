import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  vehicles:any[];
  constructor(private vehicleService: VehiclesService) {
    this.getVehicles();
   }

  ngOnInit(): void {
    this.scrollSlide();
  }
  scrollSlide(){
    const fila = document.querySelector('.contenedor-carrousel');
    const ancho = document.querySelector('.contenedor-carrousel').clientWidth;
    const publicaciones = document.querySelector('.publicacion');
    const flechaizquierda = document.querySelector('.flecha-izquierda');
    const flechaderecha = document.querySelector('.flecha-derecha');
    console.log(ancho);
    flechaizquierda.addEventListener('click', () => {
    fila.scrollLeft -= ancho;
    console.log('clickizuiqerda');
    });

    flechaderecha.addEventListener('click', () => {
    fila.scrollLeft += ancho;
    });
    
  }

  getVehicles(){
    this.vehicleService.vehicles.subscribe((resp:any)=>{
      this.vehicles = resp;
      console.log("hola aqui",this.vehicles);
    })
  }
  count(){
    localStorage.setItem('count', JSON.stringify(0));
  }
}
