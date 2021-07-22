import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private serviceModal: NgbModal) { }

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

}
