import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicarformRoutingModule } from './publicarform-routing.module';
import { PublicarformComponent } from './publicarform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/components/header/header.module';


@NgModule({
  declarations: [PublicarformComponent],
  imports: [
    CommonModule,
    PublicarformRoutingModule,
    ReactiveFormsModule,
    HeaderModule
  ]
})
export class PublicarformModule { }
