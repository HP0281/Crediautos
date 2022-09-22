import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginEpaycoService } from 'src/app/services/epayco/login/login-epayco.service';
import { TransctionService } from 'src/app/services/epayco/transaction/transction.service';

@Component({
  selector: 'app-pago-epayco',
  templateUrl: './pago-epayco.component.html',
  styleUrls: ['./pago-epayco.component.css']
})
export class PagoEpaycoComponent implements OnInit {

  public jwt;
  public tipoPago= 'tarjeta';
  constructor(private transactionService: TransctionService, private loginEpaycio: LoginEpaycoService, private router: Router) { }

  ngOnInit() {
    this.jwt = this.loginEpaycio.getTokenEpayco();
    let tok = localStorage.getItem('jwt')
  }

  pagoTarjeta(){
    this.tipoPago = 'tarjeta';
  }

  pagoPSE(){
    this.tipoPago = 'PSE';
    this.transactionService.obtenerBanks(localStorage.getItem('jwt') as string)
  }

  pagoDaviplata(){
    this.tipoPago = 'davi';
  }
}
