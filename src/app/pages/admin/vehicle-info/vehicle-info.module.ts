import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleInfoRoutingModule } from './vehicle-info-routing.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { VehicleInfoComponent } from './vehicle-info.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [VehicleInfoComponent],
  imports: [
    CommonModule,
    VehicleInfoRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ]
})
export class VehicleInfoModule { }
