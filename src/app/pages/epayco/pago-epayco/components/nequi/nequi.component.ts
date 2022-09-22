import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Package } from 'src/app/models/user/package';
import { PackageService } from 'src/app/services/package/package.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Util } from 'src/app/util/Util';
import Swal from 'sweetalert2';
import { ConstantsApp } from '../../../../../../util/Constants';

@Component({
  selector: 'app-nequi',
  templateUrl: './nequi.component.html',
  styleUrls: ['./nequi.component.scss']
})
export class NequiComponent implements OnInit {

  /**
   * Método de pago seleccionado
   */
   public payment_method_selected: string = 'NEQUI'

   public payment_methods: any = []
 
   private URL_REDIRCT: string = 'https://jobkii.com/app/my-transactions'
   //private URL_REDIRCT: string =  'https://jobkii.com/app/my-transactions';

  nequi: FormGroup;
  titulo = 'Datos de la tarjeta y el pago'
  pre_token = '' 
  submitted = false
  value_total = 0
  spinner2: boolean = false
  count: number = 0

  public preload: boolean
  public preload_comission: boolean
  public preload_pay: boolean
  public link: string
  public hideCVC = true
  pse_institutions = []

  constructor(
    private router: Router,
    private messageService: MessageService,
    private paymentService: PaymentService,
    private formBuilder: FormBuilder,
    private packageService: PackageService,
    private transactionService: TransactionService
    ) { 
      let paq: Package = JSON.parse(localStorage.getItem('Paquete'));
      let user = JSON.parse(localStorage.getItem('user'));
      
      this.nequi = this.formBuilder .group({
      number: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(12)]
      ],
      value: [
        0,
        [Validators.required, Validators.min(1000), Validators.max(2300000)]
      ],
      customer_email: [
        user.email,
        [
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(150),
          Validators.pattern(ConstantsApp.patternEmail)
        ]
      ]
    })
    this.nequi.get('value').setValue(paq.total)
    this.value_total = paq.total
  }

  ngOnInit(): void {
    this.preload = true; 
    this.getPaymenthMethodsAndPretoken()
  }

  /**
   * Cragr metodos de pago y pretoken
   */
  getPaymenthMethodsAndPretoken() {
    this.paymentService.getPretoken().subscribe(
      res => {
        const body = Util.decrypt(res.body.body)
        this.link = body.data.presigned_acceptance.permalink
        this.payment_methods = body.data.accepted_payment_methods
        this.pre_token = body.data.presigned_acceptance.acceptance_token
        this.paymentService.getInstitutions().subscribe(resp => {
          const bodyInstruction = Util.decrypt(resp.body.body)
          this.pse_institutions = bodyInstruction.data
          this.preload = false
        })
      },
      err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail:
            'No pudimos cargar los datos de pago, por favor comunicatie con el administrador del sitio.'
        })
      }
    )
  }
  /**
   * Mensaje de error del tefono
   */
   getErrorMessagePhone() {
    if (this.nequi.get('number').hasError('required')) {
      return 'Campo obligatorio'
    } else if (this.nequi.get('number').hasError('min')) {
      return 'Mínimo 1.000 COP'
    } else if (this.nequi.get('number').hasError('max')) {
      return "Máximo 2'300.000 COP"
    }
  }
  /**
   * Mensaje de error del nombre
   */
   getErrorMessageEmailNequi() {
    if (this.nequi.get('customer_email').hasError('required')) {
      return 'Campo obligatorio'
    } else if (this.nequi.get('customer_email').hasError('minlength')) {
      return 'Mínimo 3 dígitos'
    } else if (this.nequi.get('customer_email').hasError('maxlength')) {
      return 'Máximo 150 dígitos'
    } else if (this.nequi.get('customer_email').hasError('email')) {
      return 'Correo no valido'
    } else if (this.nequi.get('customer_email').hasError('pattern')) {
      return 'Correo no valido'
    }
  }
  /**
   * Terminos y condiciones
   */
  openTerms() {
    window.open(this.link, '_blank')
  }
  /**
   * Pago por nequi
   */
  paymentNequi() {
    this.submitted = true
    if (this.nequi.valid) {
      this.preload_pay = true
      let transaction = {
        value: this.value_total,
        acceptance_token: this.pre_token,
        payment_method: this.payment_method_selected,
        customer_email: this.nequi.value.customer_email,
        currency: 'COP',
        phone_number: this.nequi.value.number,
        redirect_url: this.URL_REDIRCT
      }
      this.paymentService.transactionNequi(transaction).subscribe(
        res => {
          this.preload_pay = false
          this.messageService.add({
            severity: 'error',
            summary: 'Operación exitosa!',
            detail: 'Tu recarga ha sido exitosa.'
          })
          this.spinner2 = true;
          let tras = Util.decrypt((res.body.body.transaction));
          this.verify(tras.id_wompi);
        },
        err => {
          this.preload_pay = false
          Swal.fire(
            'Pago no realizado!',
            'No pudimos realizar tu pago, intenta nuevamente',
            'error'
          )
        }
      )
    }
  }
  verify(id_wompi) {
    this.count += 1
    this.transactionService.updateTransaction(id_wompi).subscribe(res => {
      console.log(res.body.body.transaction)
      if (res.body.body.transaction.status != 'ERROR') {
        const transaction = Util.decrypt(res.body.body.transaction)
        if (transaction.status == 'APPROVED') {
          let paq = JSON.parse(localStorage.getItem('Paquete'))
          this.packageService.createPackage(paq).subscribe(res => {
            console.log(res.body)
            Swal.fire(
              'Pago efectivo!',
              'El paquete fue activado correctamente..',
              'success'
            )
            this.spinner2 = false
            this.router.navigate(['/lobby'])
          })

        } else {
          Swal.fire(
            'Pago no realizado!',
            'Revise los datos ingresados',
            'warning'
          )
          this.spinner2 = false
          this.verify(id_wompi)
        }
      } else{
        Swal.fire(
          'Pago no realizado!',
          'Revise los datos ingresados',
          'warning'
        )
        this.spinner2 = false
      }
    })
  }
}
