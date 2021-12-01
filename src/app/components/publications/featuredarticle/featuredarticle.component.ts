import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo.interface';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';

@Component({
  selector: 'app-featuredarticle',
  templateUrl: './featuredarticle.component.html',
  styleUrls: ['./featuredarticle.component.css']
})
export class FeaturedarticleComponent implements OnInit {

  public articulos: Articulo [];

  constructor(private _articuloService: ArticuloService) {
    this.getArticulosPromo();
   }

  ngOnInit(): void {
    const fila = document.querySelector('.contenedorN-carrousel');
    const ancho = document.querySelector('.contenedorN-carrousel').clientWidth;
    const publicaciones = document.querySelector('.publicacion');
    const flechaizquierda = document.querySelector('.flecha-izquierda');
    const flechaderecha = document.querySelector('.flecha-derecha');
    console.log(ancho);
    flechaizquierda.addEventListener('click', () => {
      fila.scrollLeft -= ancho;
      console.log('clickizuiqerdaN');
    });

    flechaderecha.addEventListener('click', () => {
      fila.scrollLeft += ancho;
    });

  }
  getArticulosPromo(){
    this._articuloService.getArticuloByPromo().subscribe(resp=>{
      this.articulos = resp;
      console.log("articulos promo ", this.articulos, resp)
    })
  } 
  count(){
    localStorage.setItem('count', JSON.stringify(0));
  }
}
