import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicarformComponent } from './publicarform.component';

const routes: Routes = [
  { path: '', component: PublicarformComponent },
  { path: 'articulo', component: PublicarformComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicarformRoutingModule { }
