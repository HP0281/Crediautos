import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-val-email',
  templateUrl: './val-email.component.html',
  styleUrls: ['./val-email.component.css']
})
export class ValEmailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  valEmail(){
    this.router.navigate(['/asdfasf']);
  }
  login(){
    this.router.navigate(['/login']);
  }
}
