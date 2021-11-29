import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  @ViewChild('modal') templateRef: TemplateRef<any>;
  closeResult = '';
  view =false;
  public product: Vehicle = JSON.parse(localStorage.getItem('product'));
  public imgs: any [] = JSON.parse(localStorage.getItem('images'));
  public preload: boolean = false;
  public idVehicle: string ="";
  constructor(private _imagenService: ImageService, private rutaActiva: ActivatedRoute,public modalService: NgbModal) { 
    this.idVehicle= this.rutaActiva.snapshot.params.id;
    
   }

  ngOnInit(): void {  
    
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
