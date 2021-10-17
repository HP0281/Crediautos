import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
infr:boolean;
  constructor() {
    this.infr = true;
   }

  ngOnInit(): void {
  }
  showInfo(){
    console.log(this.infr);
    this.infr = !this.infr;
  }
}
