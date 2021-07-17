import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/inicio'},
{ path: 'registro', loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroModule) }, 
{ path: 'inicio', loadChildren: () => import('./pages/inicio/inicio/inicio.module').then(m => m.InicioModule) },
{ path: 'login', loadChildren: () => import('./pages/login/login/login.module').then(m => m.LoginModule) },
  { path: 'questions', loadChildren: () => import('./pages/questions/questios/questios.module').then(m => m.QuestiosModule) },
  { path: 'publish', loadChildren: () => import('./pages/publish/publish-car/publish-car.module').then(m => m.PublishCarModule) },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact/contact.module').then(m => m.ContactModule) },
  { path: 'modificar', loadChildren: () => import('./pages/modificar/anuncio/anuncio.module').then(m => m.AnuncioModule) },
  { path: 'notificar', loadChildren: () => import('./pages/notificar/anuncio/anuncio.module').then(m => m.AnuncioModule) },
  { path: 'terminos', loadChildren: () => import('./pages/Terminos/condiciones/condiciones.module').then(m => m.CondicionesModule) },
  { path: 'privacidad', loadChildren: () => import('./pages/Privacidad/privacidad/privacidad.module').then(m => m.PrivacidadModule) },
  { path: 'errlog', loadChildren: () => import('./pages/errlogin/errlogin/errlogin.module').then(m => m.ErrloginModule) },
  { path: 'sollog', loadChildren: () => import('./pages/sollogin/sollogin/sollogin.module').then(m => m.SolloginModule) },
{ path: '**', redirectTo: '/inicio'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
