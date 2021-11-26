import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoRoutingModule } from './user-info-routing.module';
import { UserInfoComponent } from './user-info.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DireccionesModule } from '../direcciones/direcciones.module';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    UserInfoRoutingModule,
    MaterialModule,
    HeaderModule,
  ],
  exports: [UserInfoComponent]
})
export class UserInfoModule { }
