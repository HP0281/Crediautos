import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vehicle } from 'src/app/models/vehicle.interface';

@Component({
  selector: 'app-product-left',
  templateUrl: './product-left.component.html',
  styleUrls: ['./product-left.component.css']
})
export class ProductLeftComponent implements OnInit {
  public productActual: any;
  public tipo: string;
  constructor(private rutaActiva: ActivatedRoute, private modalService: NgbModal ) { 
    this.tipo = this.rutaActiva.snapshot.params.tipo;
    this.productActual = JSON.parse(localStorage.getItem('product')); 
  }

  ngOnInit(): void {
  }
  preguntar(modal){
    let login = JSON.parse(localStorage.getItem('isloggin'));
    if (login) {
      this.abrirModal(modal)
    }
  }
  abrirModal(modal){
    this.modalService.open(modal, { centered: true });
}
}
