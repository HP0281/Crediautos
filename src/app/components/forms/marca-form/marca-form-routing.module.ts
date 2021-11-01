import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaFormComponent } from './marca-form.component';

const routes: Routes = [{
  path: "", component: MarcaFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcaFormRoutingModule { }
