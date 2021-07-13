import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishCarRoutingModule } from './publish-car-routing.module';
import { PublishCarComponent } from './publish-car.component';


@NgModule({
  declarations: [PublishCarComponent],
  imports: [
    CommonModule,
    PublishCarRoutingModule
  ]
})
export class PublishCarModule { }
