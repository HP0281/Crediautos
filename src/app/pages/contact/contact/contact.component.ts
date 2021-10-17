import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  headers: string[];
  constructor() {
    this.headers =['pqr'];
   }

  ngOnInit(): void {
  }

}
