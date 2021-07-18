import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginkeyRoutingModule } from './loginkey-routing.module';
import { LoginkeyComponent } from './loginkey.component';


@NgModule({
  declarations: [LoginkeyComponent],
  imports: [
    CommonModule,
    LoginkeyRoutingModule
  ]
})
export class LoginkeyModule { }
