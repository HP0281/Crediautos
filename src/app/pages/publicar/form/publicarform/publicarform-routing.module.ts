import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { PublicarformComponent } from './publicarform.component';

const routes: Routes = [
  { path: '', component: PublicarformComponent },
  { path: 'articulo', component: ArticuloComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicarformRoutingModule { }
