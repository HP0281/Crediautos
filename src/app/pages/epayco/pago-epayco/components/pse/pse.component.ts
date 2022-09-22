import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pse',
  templateUrl: './pse.component.html',
  styleUrls: ['./pse.component.scss']
})
export class PseComponent implements OnInit {
 /**
   * Método de pago seleccionado
   */
  public payment_method_selected: string ='PSE'

  public payment_methods: any = []

  private URL_REDIRCT: string = ''
  //private URL_REDIRCT: string =  'https://jobkii.com/app/my-transactions';

  is_valid = true
  pse: FormGroup
  submitted = false
  titulo = 'Datos de la tarjeta y el pago'
  pre_token = ''
  value_total = 0
  commission = 0
  pse_institutions = []

  public preload: boolean = false
  spinner2: boolean = false
  public preload_comission: boolean
  public preload_pay: boolean
  public link: string
  public hideCVC = true

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.preload_comission = false
    this.preload_pay = false
    this.pse = this.formBuilder.group({
      user_type: ['', Validators.required],
      user_doc: ['', Validators.required],
      user_id: ['', Validators.required],
      institution: ['', Validators.required],
      value: [0, Validators.required],
      customer_email: [
          Validators.required,
          Validators.email
        
      ],
      payment_description: ['RECARGA - PSE', Validators.required]
    })
    this.value_total = 0
    this.preload = false
  }

  ngOnInit(): void {
  }
  /**
   * Cragr metodos de pago y pretoken
   */

  
  count: number = 0


  paymentPse() {
    this.submitted = true
    if (this.pse.valid) {
      this.preload_pay = true
      let transaction = {
        value: +this.value_total,
        acceptance_token: this.pre_token,
        payment_method: this.payment_method_selected,
        customer_email: this.pse.value.customer_email,
        currency: 'COP',
        user_type: +this.pse.value.user_type,
        user_doc: this.pse.value.user_doc,
        user_id: this.pse.value.user_id,
        institution: this.pse.value.institution,
        payment_description: 'RECARGA - PSE',
        redirect_url: this.URL_REDIRCT
      }
      
    }
  }

  

  /**
   * Mensaje de error del nombre
   */
  getErrorMessageEmailPSE() {
    if (this.pse.get('customer_email').hasError('required')) {
      return 'Campo obligatorio'
    } else if (this.pse.get('customer_email').hasError('minlength')) {
      return 'Mínimo 3 dígitos'
    } else if (this.pse.get('customer_email').hasError('maxlength')) {
      return 'Máximo 150 dígitos'
    } else if (this.pse.get('customer_email').hasError('email')) {
      return 'Correo no valido'
    } else if (this.pse.get('customer_email').hasError('pattern')) {
      return 'Correo no valido'
    }
  }

  /**
   * Mensaje de error del nombre
   */
  getErrorMessageValuePSE() {
    if (this.pse.get('value').hasError('required')) {
      return 'Campo obligatorio'
    } else if (this.pse.get('value').hasError('min')) {
      return 'Mínimo 1.000 COP'
    } else if (this.pse.get('value').hasError('max')) {
      return "Máximo 2'300.000 COP"
    }
  }
  /**
   * Mensaje de error del tefono
   */
  getErrorMessageDocumentPSE() {
    if (this.pse.get('user_id').hasError('required')) {
      return 'Campo obligatorio'
    } else if (this.pse.get('user_id').hasError('minlength')) {
      return 'Mínimo 3 digitos'
    } else if (this.pse.get('user_id').hasError('maxlength')) {
      return 'Máximo 15 digitos'
    }
  }
}
