import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryFormRoutingModule } from './category-form-routing.module';
import { HeaderModule } from '../../header/header.module';
import { CategoryFormComponent } from './category-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CategoryFormComponent],
  imports: [
    CommonModule,
    CategoryFormRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ]
})
export class CategoryFormModule { }
