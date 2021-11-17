import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rating,
  DinamicRating, 
  DinamicReviews, 
  DinamicPrice,
  CountDown,
  ProgressBar,
  Tabs,
  SlickConfig,
  ProductLightbox,
  Quantity } from 'src/app/functions.js';
import { Image } from 'src/app/models/image.interface';
import { Vehicle } from 'src/app/models/vehicle.interface';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.css']
})
export class GalleriaComponent implements OnInit {

  public product: Vehicle = JSON.parse(localStorage.getItem('product'));
  public imgs: any [] = JSON.parse(localStorage.getItem('images'));
  public preload: boolean = false;
  public idVehicle: string ="";
  constructor(private _imagenService: ImageService, private rutaActiva: ActivatedRoute) { 
    this.idVehicle= this.rutaActiva.snapshot.params.id;
    
   }

  ngOnInit(): void {  
    
  }

}
