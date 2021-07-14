import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featurednew',
  templateUrl: './featurednew.component.html',
  styleUrls: ['./featurednew.component.css']
})
export class FeaturednewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const fila = document.querySelector('.contenedorN-carrousel');
    const ancho = document.querySelector('.contenedorN-carrousel').clientWidth;
const publicaciones = document.querySelector('.publicacionN');
const flechaizquierda = document.querySelector('.flecha-izquierdaN');
const flechaderecha = document.querySelector('.flecha-derechaN');
console.log(ancho);
flechaizquierda.addEventListener('click', () => {
  fila.scrollLeft -= ancho;
  console.log('clickizuiqerdaN');
});

flechaderecha.addEventListener('click', () => {
  fila.scrollLeft += ancho;
});
    
  }
}
