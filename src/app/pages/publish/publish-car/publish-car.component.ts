import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publish-car',
  templateUrl: './publish-car.component.html',
  styleUrls: ['./publish-car.component.css']
})
export class PublishCarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  solicitarLog(){
    this.router.navigate(['/sollog']);
  }
  contact(){
    this.router.navigate(['/contact']);
  }
}
