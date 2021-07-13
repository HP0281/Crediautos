import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
