import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrloginRoutingModule } from './errlogin-routing.module';
import { ErrloginComponent } from './errlogin.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  declarations: [ErrloginComponent],
  imports: [
    CommonModule,
    ErrloginRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class ErrloginModule { }
