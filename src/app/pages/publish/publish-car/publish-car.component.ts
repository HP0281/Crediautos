import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-publish-car',
  templateUrl: './publish-car.component.html',
  styleUrls: ['./publish-car.component.css']
})
export class PublishCarComponent implements OnInit {

  constructor(private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
  }
  solicitarLog(){
    const user = this.auth.userinfo;
    if (user.uid) {
      this.router.navigate(['/publicarForm']);
    }else{
      this.router.navigate(['/sollog']);

    }
  }
  contact(){
    this.router.navigate(['/contact']);
  }
}
