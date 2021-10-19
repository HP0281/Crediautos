import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private auth : AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.getUser().subscribe(user =>{
      if (!user) {
        this.router.navigate(['/inicio']);
      }
    })
  }

}
