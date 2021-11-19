import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() option;
  isloggin = false;
  user: any;
  contacto:boolean=false;
  publica:boolean=false;
  ayuda:boolean=false;
  pqr:boolean=false;
  ingresar:boolean=false;
  crear:boolean=false;
  perfil:boolean=false;
  constructor(private router: Router,
    private auth: AuthService,
    private serviceModal: NgbModal) {
      this.validateLog();
      
    }
    
    ngOnInit(): void {
      if (!this.option) {
        this.option=['contacto', 'publica','ayuda','ingresar','crear','perfil'];
      }

      this.validarComponentes();
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
      if (this.user) {
        this.isloggin = true;
        localStorage.setItem('nombre', JSON.stringify(this.user.displayName));
      }
    });
  }
  onLogout(){
    this.auth.logOut();
    this.isloggin = false;
  }
  validarComponentes(){
    this.option.forEach(element => {
      switch (element) {
        case 'contacto':
          this.contacto = true;
          break;
       case 'publica':
          this.publica = true;
          break;
      case 'ayuda':
          this.ayuda = true;
          break;
      case 'pqr':
          this.pqr = true;
          break;
      case 'ingresar':
          this.ingresar = true;
          break;
      case 'crear':
          this.crear = true;
          break;
      case 'perfil':
          this.perfil = true;
          break;
        default:
          break;
      }
    });
  }
  publicar(){
    if (this.isloggin) {
      this.router.navigate(['/publicarForm']);
    } else {
      this.router.navigate(['/sollog']);
    }
  }
}
