import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VersionFormComponent } from './version-form.component';

const routes: Routes = [{
  path:"", component: VersionFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VersionFormRoutingModule { }
