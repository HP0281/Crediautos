import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SearchComponent } from 'src/app/components/forms/search/search.component';
import { FeaturedComponent } from 'src/app/components/publications/featured/featured.component';
import { StorsComponent } from 'src/app/components/promotions/stors/stors.component';
import { WantedComponent } from 'src/app/components/publications/wanted/wanted.component';
import { WantedMotosComponent } from 'src/app/components/publications/wanted-motos/wanted-motos.component';
import { WantedCamionesComponent } from 'src/app/components/publications/wanted-camiones/wanted-camiones.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { FeaturednewComponent } from 'src/app/components/publications/featurednew/featurednew.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [InicioComponent,
    
    SearchComponent,
    FeaturedComponent,
    StorsComponent,
    WantedComponent,
    WantedMotosComponent,
    WantedCamionesComponent,
    FooterComponent,
    FeaturednewComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ]
})
export class InicioModule { }
