import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardPublicidadRoutingModule } from './card-publicidad-routing.module';
import { CardPublicidadComponent } from './card-publicidad.component';


@NgModule({
  declarations: [CardPublicidadComponent],
  imports: [
    CommonModule,
    CardPublicidadRoutingModule
  ]
})
export class CardPublicidadModule { }
