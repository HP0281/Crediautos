import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginkeyComponent } from './loginkey.component';

const routes: Routes = [{ path: '', component: LoginkeyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginkeyRoutingModule { }
