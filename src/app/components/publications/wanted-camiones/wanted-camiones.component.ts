import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wanted-camiones',
  templateUrl: './wanted-camiones.component.html',
  styleUrls: ['./wanted-camiones.component.css']
})
export class WantedCamionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {this.scrollSlide();
  }
  scrollSlide(){
    const filac = document.querySelector('.contenedor-carrousel-c');
    const anchoc = document.querySelector('.contenedor-carrousel-c').clientWidth;
    const publicacionesc = document.querySelector('.publicacion-c');
    const flechaizquierdac = document.querySelector('.flecha-izquierda-c');
    const flechaderechac = document.querySelector('.flecha-derecha-c');
    console.log(anchoc);
    flechaizquierdac.addEventListener('click', () => {
    filac.scrollLeft -= anchoc;
    console.log('clickizuiqerda');
    });

    flechaderechac.addEventListener('click', () => {
    filac.scrollLeft += anchoc;
    });
    
  }}