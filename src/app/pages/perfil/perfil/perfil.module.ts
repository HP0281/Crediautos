import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ResumenComponent } from './resumen/resumen.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { DatosInteresComponent } from './datos-interes/datos-interes.component';
import { MisdatosComponent } from './misdatos/misdatos.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { ComunicacionesComponent } from './comunicaciones/comunicaciones.component';

@NgModule({
  declarations: [PerfilComponent, HeaderComponent, BodyComponent, FooterComponent, ResumenComponent, PublicacionesComponent, DatosInteresComponent, MisdatosComponent, PrivacidadComponent, ComunicacionesComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
