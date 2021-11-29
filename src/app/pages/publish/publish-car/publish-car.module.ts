import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishCarRoutingModule } from './publish-car-routing.module';
import { PublishCarComponent } from './publish-car.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  declarations: [PublishCarComponent],
  imports: [
    CommonModule,
    PublishCarRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class PublishCarModule { }
