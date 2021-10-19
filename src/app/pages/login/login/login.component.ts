import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;
  correoForm: FormGroup;
  navigationExtras : NavigationExtras={
    state:{
      value: null
    }
  };

  constructor(private router: Router, private fb: FormBuilder, 
    private auth: AuthService, private dialog:NgbModal) {
    this.initForm();
   }

  ngOnInit(): void {
    this.auth.getUser().subscribe(resp => {
      this.user = resp;
      if (this.user) {
        this.router.navigate(['/inicio']);
      }
    })
  }
  continuar(){
    this.navigationExtras.state.value = this.correoForm.get('emailuser').value;
    this.router.navigate(['/loginkey'], this.navigationExtras);
  }
  crearCuenta(){
    this.router.navigate(['/registro']);
  }

  initForm(){
    this.correoForm = this.fb.group({
      emailuser: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)])
    })
  }
  googleAuth(){
    this.auth.googleAuth();
    this.auth.getUser().subscribe(resp => {
      this.user = resp;
      if (this.user) {
        this.router.navigate(['/inicio']);
      }
    })
  }
  authFacebook(){
    this.auth.authFacebook();
    this.auth.getUser().subscribe(resp => {
      this.user = resp;
      if (this.user) {
        this.router.navigate(['/inicio']);
      }
    })
  }
}
