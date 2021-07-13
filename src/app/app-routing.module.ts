import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/inicio'},
{ path: 'registro', loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroModule) }, 
{ path: 'inicio', loadChildren: () => import('./pages/inicio/inicio/inicio.module').then(m => m.InicioModule) },
{ path: 'login', loadChildren: () => import('./pages/login/login/login.module').then(m => m.LoginModule) },
  { path: 'questions', loadChildren: () => import('./pages/questions/questios/questios.module').then(m => m.QuestiosModule) },
  { path: 'publish', loadChildren: () => import('./pages/publish/publish-car/publish-car.module').then(m => m.PublishCarModule) },
{ path: '**', redirectTo: '/inicio'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
