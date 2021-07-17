import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajandoComponent } from './trabajando.component';

const routes: Routes = [{ path: '', component: TrabajandoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabajandoRoutingModule { }
