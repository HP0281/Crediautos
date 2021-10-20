import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-publish-car',
  templateUrl: './publish-car.component.html',
  styleUrls: ['./publish-car.component.css']
})
export class PublishCarComponent implements OnInit {
  headers:string[];
  constructor(private router: Router,
    private auth: AuthService) {
      this.headers=['pqr'];
     }

  ngOnInit(): void {
  }
  solicitarLog(){
    const user = this.auth._userinfo;
    if (user) {
      this.router.navigate(['/publicarForm']);
    }else{
      this.router.navigate(['/sollog']);
    }
  }
  contact(){
    this.router.navigate(['/contact']);
  }
}
