import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import * as firebase from 'firebase/app';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { WindowService } from 'src/app/services/windows.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user : User;
  hide = false; 
  labelPosition: 'before' | 'after' = 'after';
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  disableSignUpBtn = false;
  windowsReferencia;
  recaptchaResponse;


  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private userservice: UserService, public win: WindowService,
    private authservice: AuthService) {
    this.initform();
   }

  ngOnInit(): void {
    this.windowsReferencia = this.win.windowRef;
    firebase.auth().languageCode = 'es';
    this.windowsReferencia.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
      'size': 'normal',
      'callback': this.disableSignUpBtn = true,
      'expired-callback': function() {
        this.disableSignUpBtn = false;
        console.log("no entara en el callback");
      }
      
    });
    this.windowsReferencia.recaptchaVerifier.render();
  }
  
  initform(){
    this.registroForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      lastname:  new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      clave: new FormControl('', [Validators.required]),
      terminos: new FormControl('', [Validators.required]),
      identificacion: new FormControl('', Validators.required)
    })
  } 
  async onRegistrar(email: string, pass: string){
    if (this.disableSignUpBtn) {
      try {
        const user = this.registroForm.value;
        await this.authservice.validacionPhone(user, this.windowsReferencia.recaptchaVerifier )
        this.registroForm.reset();
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Verifica que no eres un robot");
    }
  }
  onGuardar(){
    if (this.registroForm.valid) {
      const user = this.registroForm.value;
      console.log(user)
      const userid = null;
      this.userservice.onSaveUser(this.registroForm.value);
    }
  }
  getErrorMessage() {
    if (this.registroForm.get('nombre').hasError('required')) {
      return 'You must enter a value';
    }
 
    return this.registroForm.get('nombre').hasError('nombre') ? 'Not a valid nombre' : '';
  }
}
