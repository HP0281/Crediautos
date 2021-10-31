import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-loginkey',
  templateUrl: './loginkey.component.html',
  styleUrls: ['./loginkey.component.css']
})
export class LoginkeyComponent implements OnInit {
  correo :string;
  claveForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService) {
    const navigation = router.getCurrentNavigation();
    this.correo = navigation.extras?.state?.value;
  this.initForm();
   }

  ngOnInit(): void {
    console.log("correo: "+this.correo);
    if (this.correo) {
    } else {
      this.router.navigate(['/login']);
      
    }
  }
  valEmail(){
    this.router.navigate(['/valemail']);
  }
  ingresar(){
    console.log('ingresando'+this.claveForm.get('clave').value);
    this.auth.login(this.correo, this.claveForm.get('clave').value);
    this.router.navigate(['/inicio']);
    //this.validaringreso();
  }
  initForm(){
    this.claveForm = this.fb.group({
      clave: new FormControl('', [Validators.required])
    })
  }
  validaringreso(){
    const user = this.auth.userinfo;
    if (user) {
      this.router.navigate(['/inicio']);
    }else{
      this.router.navigate(['/sollog']);
    }
  }
}
