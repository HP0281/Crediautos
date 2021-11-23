import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoRoutingModule } from './user-info-routing.module';
import { UserInfoComponent } from './user-info.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DireccionesModule } from '../direcciones/direcciones.module';


@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    UserInfoRoutingModule,
    MaterialModule
  ],
  exports: [UserInfoComponent]
})
export class UserInfoModule { }
