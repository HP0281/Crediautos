import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  expanded = false;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.expanded = !this.expanded;
  }

}
