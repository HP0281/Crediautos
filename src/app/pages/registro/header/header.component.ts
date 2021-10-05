import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { validateLocaleAndSetLanguage } from 'typescript';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;
  isloggin= true;
  constructor(private auth: AuthService) {
    this.validatelog();
   }
  validatelog() {
   this.auth.getUser().subscribe(resp =>{
     this.user = resp;
   });
   if (this.user) {
    this.isloggin = true;
  }
  }

  ngOnInit(): void {
  }

}
