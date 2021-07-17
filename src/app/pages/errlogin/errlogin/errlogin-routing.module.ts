import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrloginComponent } from './errlogin.component';

const routes: Routes = [{ path: '', component: ErrloginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrloginRoutingModule { }
