import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelosFormComponent } from './modelos-form.component';

const routes: Routes = [{path:"", component: ModelosFormComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelosFormRoutingModule { }
