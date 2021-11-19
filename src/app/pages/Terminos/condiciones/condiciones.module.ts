import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondicionesRoutingModule } from './condiciones-routing.module';
import { CondicionesComponent } from './condiciones.component';
import { HeaderModule } from 'src/app/components/header/header.module';




@NgModule({
  declarations: [CondicionesComponent],
  imports: [
    CommonModule,
    CondicionesRoutingModule,
    HeaderModule
  ]
})
export class CondicionesModule { }
