import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelosFormRoutingModule } from './modelos-form-routing.module';
import { ModelosFormComponent } from './modelos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../../header/header.module';


@NgModule({
  declarations: [ModelosFormComponent],
  imports: [
    CommonModule,
    ModelosFormRoutingModule,
    ReactiveFormsModule,
    HeaderModule
  ]
})
export class ModelosFormModule { }
