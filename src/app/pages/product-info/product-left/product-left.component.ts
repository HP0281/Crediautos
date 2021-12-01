import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle.interface';

@Component({
  selector: 'app-product-left',
  templateUrl: './product-left.component.html',
  styleUrls: ['./product-left.component.css']
})
export class ProductLeftComponent implements OnInit {
  public productActual: any;
  public tipo: string;

  constructor(private rutaActiva: ActivatedRoute ) { 
    this.tipo = this.rutaActiva.snapshot.params.tipo;
    this.productActual = JSON.parse(localStorage.getItem('product')); 
  }

  ngOnInit(): void {
  }

}
