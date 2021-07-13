import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [RegistroComponent, HeaderComponent, FormComponent, FooterComponent],
  imports: [
    CommonModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
