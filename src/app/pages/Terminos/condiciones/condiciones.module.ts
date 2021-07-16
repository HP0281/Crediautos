import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondicionesRoutingModule } from './condiciones-routing.module';
import { CondicionesComponent } from './condiciones.component';


@NgModule({
  declarations: [CondicionesComponent],
  imports: [
    CommonModule,
    CondicionesRoutingModule
  ]
})
export class CondicionesModule { }
