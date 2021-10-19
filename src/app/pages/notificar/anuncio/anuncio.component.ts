import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {
  headers:string[];

  constructor() { 
    this.headers=['contacto','ayuda','crear','ingresar', 'perfil'];
  }

  ngOnInit(): void {
  }

}
