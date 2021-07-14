import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/forms/search/search.component';
import { FeaturedComponent } from './components/publications/featured/featured.component';
import { StorsComponent } from './components/promotions/stors/stors.component';
import { WantedComponent } from './components/publications/wanted/wanted.component';
import { WantedMotosComponent } from './components/publications/wanted-motos/wanted-motos.component';
import { WantedCamionesComponent } from './components/publications/wanted-camiones/wanted-camiones.component';

import { BodyComponent } from './pages/questions/body/body.component';
import { FeaturednewComponent } from './components/publications/featurednew/featurednew.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
