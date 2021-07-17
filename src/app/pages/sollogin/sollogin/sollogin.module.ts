import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolloginRoutingModule } from './sollogin-routing.module';
import { SolloginComponent } from './sollogin.component';


@NgModule({
  declarations: [SolloginComponent],
  imports: [
    CommonModule,
    SolloginRoutingModule
  ]
})
export class SolloginModule { }
