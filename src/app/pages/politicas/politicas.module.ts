import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticasRoutingModule } from './politicas-routing.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';


@NgModule({
  declarations: [],
  imports: [ 
    CommonModule,
    PoliticasRoutingModule,
    FooterModule,
    HeaderModule
  ]
})
export class PoliticasModule { }
