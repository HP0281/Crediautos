import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sollogin',
  templateUrl: './sollogin.component.html',
  styleUrls: ['./sollogin.component.css']
})
export class SolloginComponent implements OnInit {

  constructor(private rotuer: Router) { }

  ngOnInit(): void {
  }
  create(){
    this.rotuer.navigate(['/registro']);
  }
  login(){
    this.rotuer.navigate(['/login']);
  }
}
