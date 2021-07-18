import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValEmailRoutingModule } from './val-email-routing.module';
import { ValEmailComponent } from './val-email.component';


@NgModule({
  declarations: [ValEmailComponent],
  imports: [
    CommonModule,
    ValEmailRoutingModule
  ]
})
export class ValEmailModule { }
