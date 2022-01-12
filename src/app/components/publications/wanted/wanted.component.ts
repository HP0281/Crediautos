import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-wanted',
  templateUrl: './wanted.component.html',
  styleUrls: ['./wanted.component.css']
})
export class WantedComponent implements OnInit {

  constructor(private _vehicleService: VehiclesService, private router:Router) {
  }

  ngOnInit(): void {
    this.scrollSlide();
  }
  scrollSlide() {
    const filaw = document.querySelector('.contenedor-carrouselw');
    const anchow = document.querySelector('.contenedor-carrouselw').clientWidth;
    const publicacionesw = document.querySelector('.publicacionw');
    const flechaizquierdaw = document.querySelector('.flecha-izquierdaw');
    const flechaderechaw = document.querySelector('.flecha-derechaw');
    console.log(anchow);
    flechaizquierdaw.addEventListener('click', () => {
      filaw.scrollLeft -= anchow;
      console.log('clickizuiqerda');
    });

    flechaderechaw.addEventListener('click', () => {
      filaw.scrollLeft += anchow;
      console.log('clickderecha');
    });

  }
  buscar(marca:string){
    this._vehicleService.getVehicleByMarca(marca).subscribe(resp => {
      let vehicle = resp;
        localStorage.setItem('vehicles', JSON.stringify(vehicle));
        this.router.navigate(['/buscar']);
    })
  }
}
