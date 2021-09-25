import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicarformRoutingModule } from './publicarform-routing.module';
import { PublicarformComponent } from './publicarform.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PublicarformComponent],
  imports: [
    CommonModule,
    PublicarformRoutingModule,
    ReactiveFormsModule
  ]
})
export class PublicarformModule { }
