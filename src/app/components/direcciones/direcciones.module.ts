import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DireccionesRoutingModule } from './direcciones-routing.module';
import { DireccionesComponent } from './direcciones.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatFormField } from '@angular/material/form-field';


@NgModule({
  declarations: [DireccionesComponent],
  imports: [
    CommonModule,
    DireccionesRoutingModule,
    MaterialModule
  ],
  exports: [DireccionesComponent]
})
export class DireccionesModule { }
