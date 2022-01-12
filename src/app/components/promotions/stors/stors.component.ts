import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-stors',
  templateUrl: './stors.component.html',
  styleUrls: ['./stors.component.css']
})
export class StorsComponent implements OnInit {

  isloggin = false;
  user: any;
  
  constructor(private router: Router,
    private auth: AuthService,) {
      this.validateLog();
     }

  ngOnInit(): void {
  }
  publicarV(){
    if (this.isloggin) {
      this.router.navigate(['/publicarForm']);
    } else {
      this.router.navigate(['/sollog']);
    }
  }
  publicarA(){
    if (this.isloggin) {
      this.router.navigate(['/publicarForm/articulo']);
    } else {
      this.router.navigate(['/sollog']);
    }
  }
  validateLog(){
    this.auth.getUser().subscribe(respo => {
      this.user = respo;
      if (this.user) {
        this.isloggin = true;
        localStorage.setItem('nombre', JSON.stringify(this.user.displayName));
      }
    });
  }
}
