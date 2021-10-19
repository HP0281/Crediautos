import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questios',
  templateUrl: './questios.component.html',
  styleUrls: ['./questios.component.css']
})
export class QuestiosComponent implements OnInit {
  headers:string[];

  constructor() {
    this.headers=['pqr'];
   }

  ngOnInit(): void {
  }

}
