import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {
  headers:string[];
  constructor() {
    this.headers=['crear', 'ingresar','ayuda', 'contacto', 'perfil'];
   }

  ngOnInit(): void {
  }

}
