import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacidadModule } from '../../Privacidad/privacidad/privacidad.module';
import { ComunicacionesComponent } from './comunicaciones/comunicaciones.component';
import { DatosInteresComponent } from './datos-interes/datos-interes.component';
import { MisdatosComponent } from './misdatos/misdatos.component';
import { PerfilComponent } from './perfil.component';
import { PerfilModule } from './perfil.module';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { ResumenComponent } from './resumen/resumen.component';

const routes: Routes = [{ path: '', component: PerfilComponent,
children:[{path: '', component: ResumenComponent},
{path: 'resumen', component: ResumenComponent},
{path: 'publicaciones', component: PublicacionesComponent},
{path: 'datosinteres', component: DatosInteresComponent},
{path: 'misdatos', component: MisdatosComponent},
{path: 'privacidad', component: PrivacidadComponent},
{path: 'comunicaciones', component: ComunicacionesComponent},
{path: 'privacidad/privacidad', component: PrivacidadModule}]}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
