import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajandoRoutingModule } from './trabajando-routing.module';
import { TrabajandoComponent } from './trabajando.component';


@NgModule({
  declarations: [TrabajandoComponent],
  imports: [
    CommonModule,
    TrabajandoRoutingModule
  ]
})
export class TrabajandoModule { }
