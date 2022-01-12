import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { BodyComponent } from './body/body.component';
import { ResumenComponent } from './resumen/resumen.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { DatosInteresComponent } from './datos-interes/datos-interes.component';
import { MisdatosComponent } from './misdatos/misdatos.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { ComunicacionesComponent } from './comunicaciones/comunicaciones.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [PerfilComponent, BodyComponent, ResumenComponent, PublicacionesComponent, DatosInteresComponent, MisdatosComponent, PrivacidadComponent, ComunicacionesComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    FooterModule,
    HeaderModule
  ]
})
export class PerfilModule { }
