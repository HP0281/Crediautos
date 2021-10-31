import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcaFormRoutingModule } from './marca-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../../header/header.module';
import { MarcaFormComponent } from './marca-form.component';


@NgModule({
  declarations: [MarcaFormComponent],
  imports: [
    CommonModule,
    MarcaFormRoutingModule,
    ReactiveFormsModule,
    HeaderModule
  ]
})
export class MarcaFormModule { }
