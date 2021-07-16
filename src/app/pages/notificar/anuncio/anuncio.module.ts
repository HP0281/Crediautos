import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnuncioRoutingModule } from './anuncio-routing.module';
import { AnuncioComponent } from './anuncio.component';


@NgModule({
  declarations: [AnuncioComponent],
  imports: [
    CommonModule,
    AnuncioRoutingModule
  ]
})
export class AnuncioModule { }
