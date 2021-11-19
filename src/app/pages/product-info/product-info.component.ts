import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle.interface';
import { ImageService } from 'src/app/services/image/image.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  public prueba: number[]= [1,1,1];
  public preload: boolean = true;
  public images: any[];
  public idVehicle: string ="";
  public productActual: Vehicle;
  constructor(private _imagenService: ImageService, private rutaActiva: ActivatedRoute, private _productsService: VehiclesService) { 
    this.idVehicle= this.rutaActiva.snapshot.params.id;
    
   }
  ngOnInit(): void {
    let count = JSON.parse(localStorage.getItem('count'));
    if (count<1) {
      this.preload = false;
      this._imagenService.getimageByID(this.idVehicle).subscribe(resp => {
        this.images = resp;
        this._productsService.getVehicleById(this.idVehicle).subscribe( product =>{
          this.productActual = product[0];
          localStorage.setItem('images', JSON.stringify(this.images));
        console.log(this.images, resp);
        localStorage.setItem('count', JSON.stringify(1));
        localStorage.setItem('product', JSON.stringify(this.productActual));
        
        window.location.reload();
        })
        
      })
      
    }
  }

}
