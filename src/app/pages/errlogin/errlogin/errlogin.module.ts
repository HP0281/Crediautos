import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrloginRoutingModule } from './errlogin-routing.module';
import { ErrloginComponent } from './errlogin.component';


@NgModule({
  declarations: [ErrloginComponent],
  imports: [
    CommonModule,
    ErrloginRoutingModule
  ]
})
export class ErrloginModule { }
