import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wanted-motos',
  templateUrl: './wanted-motos.component.html',
  styleUrls: ['./wanted-motos.component.css']
})
export class WantedMotosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.scrollSlide();
  }
  scrollSlide(){
    const filam = document.querySelector('.contenedor-carrousel-moto');
    const anchom = document.querySelector('.contenedor-carrousel-moto').clientWidth;
    const publicacionesm = document.querySelector('.publicacion-moto');
    const flechaizquierdam = document.querySelector('.flecha-izquierda-moto');
    const flechaderecham = document.querySelector('.flecha-derecha-moto');
    console.log(anchom);
    flechaizquierdam.addEventListener('click', () => {
    filam.scrollLeft -= anchom;
    console.log('clickizuiqerda');
    });

    flechaderecham.addEventListener('click', () => {
    filam.scrollLeft += anchom;
    });
    
  }
}
