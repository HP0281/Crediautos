import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolloginRoutingModule } from './sollogin-routing.module';
import { SolloginComponent } from './sollogin.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  declarations: [SolloginComponent],
  imports: [
    CommonModule,
    SolloginRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class SolloginModule { }
