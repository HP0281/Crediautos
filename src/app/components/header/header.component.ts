import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isloggin=true;
  user: any;
  constructor(private router: Router,
    private auth: AuthService,
    private serviceModal: NgbModal) {
      this.validateLog();
      
    }
    
    ngOnInit(): void {
  }
  goTo(route:string){
    this.router.navigate([route]);
    this.router.navigateByUrl(route); 
  }
  abrirmodal(modal){
    console.log();
    this.serviceModal.open(modal);
  }
  validateLog(){
    this.auth.getUser().subscribe(respo => {
      this.user = respo;
    });
    if (this.user) {
      this.isloggin = true;
    }
  }
}
