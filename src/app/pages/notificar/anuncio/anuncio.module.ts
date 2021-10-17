import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnuncioRoutingModule } from './anuncio-routing.module';
import { AnuncioComponent } from './anuncio.component';
import { HeaderModule } from 'src/app/components/header/header.module';


@NgModule({
  declarations: [AnuncioComponent],
  imports: [
    CommonModule,
    AnuncioRoutingModule,
    HeaderModule
  ]
})
export class AnuncioModule { }
