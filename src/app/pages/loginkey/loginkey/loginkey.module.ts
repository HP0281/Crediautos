import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginkeyRoutingModule } from './loginkey-routing.module';
import { LoginkeyComponent } from './loginkey.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [LoginkeyComponent],
  imports: [
    CommonModule,
    LoginkeyRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    MatCardModule,
  ]
})
export class LoginkeyModule { }
