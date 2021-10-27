import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumenComponent } from './pages/perfil/perfil/resumen/resumen.component';

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
  { path: 'buscar', loadChildren: () => import('./pages/searchResult/search-result/search-result.module').then(m => m.SearchResultModule) },
  { path: 'trabajando', loadChildren: () => import('./pages/trabajando/trabajando/trabajando.module').then(m => m.TrabajandoModule) },
  { path: 'loginkey', loadChildren: () => import('./pages/loginkey/loginkey/loginkey.module').then(m => m.LoginkeyModule) },
  { path: 'valemail', loadChildren: () => import('./pages/valEmail/val-email/val-email.module').then(m => m.ValEmailModule) },
  { path: 'perfil', loadChildren: () => import('./pages/perfil/perfil/perfil.module').then(m => m.PerfilModule)},
  { path: 'cardpublicidad', loadChildren: () => import('./components/card-publicidad/card-publicidad.module').then(m => m.CardPublicidadModule) },
  { path: 'publicarForm', loadChildren: () => import('./pages/publicar/form/publicarform/publicarform.module').then(m => m.PublicarformModule) },
  { path: 'admVehicle', loadChildren: () => import('./pages/admin/vehicle-info/vehicle-info.module').then(m => m.VehicleInfoModule) },
  { path: 'categoryform', loadChildren: () => import('./components/forms/category-form/category-form.module').then(m => m.CategoryFormModule)},
  { path: 'marcaform', loadChildren: () => import('./components/forms/marca-form/marca-form.module').then(m => m.MarcaFormModule)},
  { path: 'modeloform', loadChildren: () => import('./components/forms/modelos-form/modelos-form.module').then(m => m.ModelosFormModule)},
  { path: 'versionform', loadChildren: () => import('./components/forms/version-form/version-form.module').then(m => m.VersionFormModule)},
 { path: '**', redirectTo: '/trabajando'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
