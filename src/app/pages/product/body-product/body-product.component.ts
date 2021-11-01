import { Component, OnInit } from '@angular/core';
import  * as jsfeat from "jsfeat";
@Component({
  selector: 'app-body-product',
  templateUrl: './body-product.component.html',
  styleUrls: ['./body-product.component.css']
})
export class BodyProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(jsfeat)
  }

}
