import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  urlimg:string;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.getUser().subscribe(user =>{
      if (!user) {
        this.router.navigate(['/inicio']);
      }else{
        this.urlimg = user.photoURL
      }
    })
  }

}
