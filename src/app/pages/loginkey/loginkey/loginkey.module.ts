import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginkeyRoutingModule } from './loginkey-routing.module';
import { LoginkeyComponent } from './loginkey.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginkeyComponent],
  imports: [
    CommonModule,
    LoginkeyRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginkeyModule { }
