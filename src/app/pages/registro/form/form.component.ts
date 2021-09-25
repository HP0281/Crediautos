import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user : User;
  registroForm: FormGroup;
  constructor(private fb: FormBuilder, private userservice: UserService,
    private authservice: AuthService) {
    this.initform();
   }

  ngOnInit(): void {
  }
  
  initform(){
    this.registroForm = this.fb.group({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apname:  new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      clave: new FormControl('', [Validators.required]),
      terminos: new FormControl('', [Validators.required]),
    })
  }
  async onRegistrar(email: string, pass: string){
    try {
      await this.authservice.registrar(email, pass);
      this.onGuardar();
      this.registroForm.reset();
    } catch (error) {
      alert(error.message);
    }
    this.onGuardar();
  }
  onGuardar(){
    if (this.registroForm.valid) {
      const user = this.registroForm.value;
      const userid = null;
      this.userservice.onSaveUser(this.registroForm.value);
    }
  }
}
