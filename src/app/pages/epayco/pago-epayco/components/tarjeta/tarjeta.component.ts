import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import Swal from 'sweetalert2';
import { TransctionService } from 'src/app/services/epayco/transaction/transction.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {
  /**
     * Método de pago seleccionado
     */
  public payment_method_selected: string = 'CARD'

  public payment_methods: any = []

  spinner2 = false;
  is_valid = true
  card: FormGroup
  nequi: FormGroup
  pse: FormGroup
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
  public terms: FormControl
  public link: string
  public hideCVC = true

  public productActual: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private transctionService: TransctionService,
    private userService: UserService
  ) {
    this.productActual = JSON.parse(localStorage.getItem('product'));
    this.card = this.formBuilder.group({
      number: [
        '',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16)
        ]
      ],
      cvc: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(3)]
      ],
      exp_month: [
        '',
        [Validators.required, Validators.min(1), Validators.max(12)]
      ],
      exp_year: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.min(2022),
          Validators.max(2050)
        ]
      ],
      card_holder: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(150)
        ]
      ],
      customer_email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(150),
        ]
      ],
      installments: [
        1,
        [Validators.required, Validators.min(1), Validators.max(36)]
      ],
      value: [
        this.productActual.valor,
        [Validators.required, Validators.min(1000), Validators.max(2300000)]
      ]
    })

  }

  ngOnInit(): void {
  }
  volver() {
  }
  pagar() {
    if (this.card.valid) {
      this.spinner2 = true;
      this.preload = true;
      console.log("car:", this.card.value);
      let cred = JSON.parse(localStorage.getItem('cred'));
      this.userService.getEmailById(cred.user.uid).subscribe(resp => {
        this.transctionService.pagoTarjeta(localStorage.getItem('jwt') as string, this.card.value, resp[0] as User).subscribe((res:any) => {
          this.spinner2 = false;
          this.preload = false;
          console.log(res)
          if (res.data.transaction.data.estado == 'Aceptada') {
            this.transctionService.onSaveTransaction(res.data.transaction.data,'');
            Swal.fire(
              'Pago efectivo!',
              'Producto Comprado',
              'success',
            ).then(resultado => {
              if (resultado.isConfirmed) {
                this.router.navigate(['/']);
              }
            })
          } else if (res.data.transaction.data.estado == "Rechazada") {
            this.transctionService.onSaveTransaction(res.data.transaction.data,'');
            Swal.fire(
              'Pago Rechazado!',
              res.data.transaction.data.respuesta,
              'error'
            )
          } else if (res.data.transaction.data.estado == "Fallida"){
            Swal.fire(
              'Pago Fallido!',
              res.data.transaction.data.respuesta,
              'warning'
            )

          }else {
            Swal.fire(
              'Pago Pendiente!',
              res.data.transaction.data.respuesta,
              'warning'
            )
          }

        })
      });
    }
  }
  /**
   * Mensaje de error del campo año en tarjeta crédito
   */
  getErrorCardYear() {
    if (this.card.get('exp_year').hasError('required')) {
      return 'Campo obligatorio'
    } else if (this.card.get('exp_year').hasError('min')) {
      return 'Mínimo 2022'
    } else if (this.card.get('exp_year').hasError('max')) {
      return 'Máximo 2050'
    }
  }

  /**
   * Mensaje de error del nombre
   */
  getErrorMessageCuotas() {
    if (this.card.get('installments').hasError('required')) {
      return 'Campo obligatorio'
    } else if (this.card.get('installments').hasError('min')) {
      return 'Mínimo 1 cuota'
    } else if (this.card.get('installments').hasError('max')) {
      return 'Máximo 36 cuotas'
    }
  }
  /**
  * Mensaje de error del campo mes en tarjeta crédito
  */
  getErrorCardMonth() {
    if (this.card.get('exp_month').hasError('required')) {
      return 'Campo obligatorio'
    } else if (this.card.get('exp_month').hasError('min')) {
      return 'Mínimo 1'
    } else if (this.card.get('exp_month').hasError('max')) {
      return 'Máximo 12'
    }
  }


  /**
   * Mensaje de error del nombre
   */
  getErrorMessageValue() {
    if (this.card.get('value').hasError('required')) {
      return 'Campo obligatorio'
    } else if (this.card.get('value').hasError('min')) {
      return 'Mínimo 1.000 COP'
    } else if (this.card.get('value').hasError('max')) {
      return "Máximo 2'300.000 COP"
    }
  }
  getErrorMessageValueNEQUI() {
    if (this.nequi.get('value').hasError('required')) {
      return 'Campo obligatorio'
    } else if (this.nequi.get('value').hasError('min')) {
      return 'Mínimo 1.000 COP'
    } else if (this.nequi.get('value').hasError('max')) {
      return "Máximo 2'300.000 COP"
    }
  }
  getErrorMessageValuePSE() {
    if (this.pse.get('value').hasError('required')) {
      return 'Campo obligatorio'
    } else if (this.pse.get('value').hasError('min')) {
      return 'Mínimo 1.000 COP'
    } else if (this.pse.get('value').hasError('max')) {
      return "Máximo 2'300.000 COP"
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
