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
import { FeaturedarticleComponent } from 'src/app/components/publications/featuredarticle/featuredarticle.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { BannerComponent } from 'src/app/components/publications/banner/banner.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [InicioComponent,
    SearchComponent,
    FeaturedComponent,
    FeaturedarticleComponent,
    StorsComponent,
    WantedComponent,
    WantedMotosComponent,
    WantedCamionesComponent,
    FeaturednewComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    HeaderModule,
    FooterModule,
    SlickCarouselModule,
    ReactiveFormsModule
  ]
})
export class InicioModule { }
