import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginkey',
  templateUrl: './loginkey.component.html',
  styleUrls: ['./loginkey.component.css']
})
export class LoginkeyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  valEmail(){
    this.router.navigate(['/valemail']);
  }
}
