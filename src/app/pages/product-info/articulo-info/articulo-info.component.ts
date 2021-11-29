import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/models/articulo.interface';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-articulo-info',
  templateUrl: './articulo-info.component.html',
  styleUrls: ['./articulo-info.component.css']
})
export class ArticuloInfoComponent implements OnInit {
  public prueba: number[]= [1,1,1];
  public preload: boolean = true;
  public images: any[];
  public idArticulo: string ="";
  public productActual: Articulo;
  constructor(private _imagenService: ImageService, 
    private rutaActiva: ActivatedRoute, 
    private _productsService: ArticuloService) { 
    this.idArticulo= this.rutaActiva.snapshot.params.id;
    
   }
  ngOnInit(): void {
    let count = JSON.parse(localStorage.getItem('count'));
    if (count<1) {
      this.preload = false;
      this._imagenService.getimageByID(this.idArticulo).subscribe(resp => {
        this.images = resp;
        this._productsService.getArticuloById(this.idArticulo).subscribe( product =>{
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
