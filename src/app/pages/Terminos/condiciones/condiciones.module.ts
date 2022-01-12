import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondicionesRoutingModule } from './condiciones-routing.module';
import { CondicionesComponent } from './condiciones.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';




@NgModule({
  declarations: [CondicionesComponent],
  imports: [
    CommonModule,
    CondicionesRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class CondicionesModule { }
