import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Package } from 'src/app/models/user/package';
import { PackageService } from 'src/app/services/package/package.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { ConstantsApp } from 'src/app/util/Constants';
import { Util } from 'src/app/util/Util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bancolombia',
  templateUrl: './bancolombia.component.html',
  styleUrls: ['./bancolombia.component.scss']
})
export class BancolombiaComponent implements OnInit {
 /**
   * Método de pago seleccionado
   */
  public payment_method_selected: string ='BANCOLOMBIA_TRANSFER'

  public payment_methods: any = []

  private URL_REDIRCT: string = 'https://jobkii.com/app/my-transactions'
  //private URL_REDIRCT: string =  'https://jobkii.com/app/my-transactions';

  is_valid = true
  bancolombia: FormGroup
  submitted = false
  titulo = 'Datos de la tarjeta y el pago'
  pre_token = ''
  value_total = 0
  commission = 0
  pse_institutions = []

  public preload: boolean
  public preload_comission: boolean
  public preload_pay: boolean
  public link: string
  public hideCVC = true

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
    this.preload_comission = false
    this.preload_pay = false

    this.bancolombia = this.formBuilder.group({
      user_type: ['', Validators.required],
      value: [0, Validators.required],
      customer_email: [
        user.email,
        [
          Validators.required,
          Validators.email,
          Validators.pattern(ConstantsApp.patternEmail)
        ]
      ],
      payment_description: ['RECARGA JOBKII - BANCOLOMBIA', Validators.required]
    })
    this.bancolombia.get('value').setValue(paq.total)
    this.value_total = paq.total
    this.preload = true
  }

  ngOnInit(): void {
    this.getPaymenthMethodsAndPretoken()
  }
  volver() {
    this.router.navigate(['/package'])
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


  spinner2: boolean = false
  count: number = 0


  verify(id_wompi) {
    this.count += 1
    this.spinner2 = true
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

  paymentBancolombia() {
    this.submitted = true
    if (this.bancolombia.valid) {
      this.preload_pay = true
      let transaction = {
        value: this.value_total,
        acceptance_token: this.pre_token,
        payment_method: this.payment_method_selected,
        customer_email: this.bancolombia.value.customer_email,
        currency: 'COP',
        user_type: this.bancolombia.value.user_type,
        payment_description: 'RECARGA JOBKII - BANCOLOMBIA',
        redirect_url: this.URL_REDIRCT
      }
      this.paymentService.transactionBancolombia(transaction).subscribe(
        res => {
          this.messageService.add({
            severity: 'info',
            summary: 'Aviso',
            detail: 'En seguida serás redigirido a la página del banco.'
          })
          let x = Util.decrypt(res.body.body.transaction_bank);
          console.log(x)
          setTimeout(() => {
            window.open(
              x.data.payment_method.extra
                .async_payment_url,
              '_self '
            )
          }, 3000)
          this.verify(res.body.body.transaction.id_wompi)
        },
        err => {
          this.preload_pay = false
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No pudimos realizar tu pago, intenta nuevamente'
          })
        }
      )
    }
  }
  openTerms() {
    window.open(this.link, '_blank')
  }

  /**
   * Mensaje de error del nombre
   */
  getErrorMessageEmailBancolombia() {
    if (this.bancolombia.get('customer_email').hasError('required')) {
      return 'Campo obligatorio'
    } else if (this.bancolombia.get('customer_email').hasError('minlength')) {
      return 'Mínimo 3 dígitos'
    } else if (this.bancolombia.get('customer_email').hasError('maxlength')) {
      return 'Máximo 150 dígitos'
    } else if (this.bancolombia.get('customer_email').hasError('email')) {
      return 'Correo no valido'
    } else if (this.bancolombia.get('customer_email').hasError('pattern')) {
      return 'Correo no valido'
    }
  }

  getErrorMessageValueBancolombia() {
    if (this.bancolombia.get('value').hasError('required')) {
      return 'Campo obligatorio'
    } else if (this.bancolombia.get('value').hasError('min')) {
      return 'Mínimo 1.000 COP'
    } else if (this.bancolombia.get('value').hasError('max')) {
      return "Máximo 2'300.000 COP"
    }
  }
}
