import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolloginComponent } from './sollogin.component';

const routes: Routes = [{ path: '', component: SolloginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolloginRoutingModule { }
