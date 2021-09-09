import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPublicidadComponent } from './card-publicidad.component';

const routes: Routes = [{ path: '', component: CardPublicidadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardPublicidadRoutingModule { }
