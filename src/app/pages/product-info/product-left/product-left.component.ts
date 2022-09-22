import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vehicle } from 'src/app/models/vehicle.interface';
import { LoginEpaycoService } from 'src/app/services/epayco/login/login-epayco.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-product-left',
  templateUrl: './product-left.component.html',
  styleUrls: ['./product-left.component.css']
})
export class ProductLeftComponent implements OnInit {
  public productActual: any;
  public tipo: string;
  constructor(private rutaActiva: ActivatedRoute, private router: Router,
    private modalService: NgbModal, private v: VehiclesService, private epaycoLogin: LoginEpaycoService) { 
    this.tipo = this.rutaActiva.snapshot.params.tipo;
    this.productActual = JSON.parse(localStorage.getItem('product')); 
  }

  ngOnInit(): void {
  }
  Pagar(){
    /*let login = JSON.parse(localStorage.getItem('isloggin'));
    if (login) {
      this.abrirModal(modal)
    }*/
    this.router.navigate(['/pago']);
  }
  abrirModal(modal){
    this.modalService.open(modal, { centered: true });
}
}
