import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersionFormRoutingModule } from './version-form-routing.module';
import { HeaderModule } from '../../header/header.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VersionFormComponent } from './version-form.component';


@NgModule({
  declarations: [VersionFormComponent],
  imports: [
    CommonModule,
    VersionFormRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ]
})
export class VersionFormModule { }
