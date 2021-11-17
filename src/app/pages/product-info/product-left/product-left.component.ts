import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.interface';

@Component({
  selector: 'app-product-left',
  templateUrl: './product-left.component.html',
  styleUrls: ['./product-left.component.css']
})
export class ProductLeftComponent implements OnInit {
  public productActual: Vehicle;

  constructor() { 
    this.productActual = JSON.parse(localStorage.getItem('product')); 
  }

  ngOnInit(): void {
  }

}
