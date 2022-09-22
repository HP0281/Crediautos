import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { HeaderModule } from './components/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductLeftComponent } from './pages/product-info/product-left/product-left.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { GalleriaComponent } from './pages/product-info/product-left/galleria/galleria.component';
import { BodyResultComponent } from './pages/searchResult/search-result/body-result/body-result.component';
import { HeaderResultComponent } from './pages/searchResult/search-result/header-result/header-result.component';
import { SearchResultComponent } from './pages/searchResult/search-result/search-result.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterModule } from './components/footer/footer.module';
import { ArticuloInfoComponent } from './pages/product-info/articulo-info/articulo-info.component';
import { BannerComponent } from './components/publications/banner/banner.component';

import { SlickCarouselModule } from 'ngx-slick-carousel'
import { LoginEpaycoService } from './services/epayco/login/login-epayco.service';
import { HttpClientModule } from '@angular/common/http';
import { PagoEpaycoComponent } from './pages/epayco/pago-epayco/pago-epayco.component';
import { TransctionService } from './services/epayco/transaction/transction.service';
import { TarjetaComponent } from './pages/epayco/pago-epayco/components/tarjeta/tarjeta.component';
import { PseComponent } from './pages/epayco/pago-epayco/components/pse/pse.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductLeftComponent,
    ProductInfoComponent,
    GalleriaComponent,
    SearchResultComponent, 
    HeaderResultComponent, 
    BodyResultComponent, 
    PoliticasComponent, 
    ArticuloInfoComponent, 
    PagoEpaycoComponent,
    TarjetaComponent,
    PseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    SlickCarouselModule,
    FormsModule,
    HeaderModule,
    FooterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialModule
  ],
  providers: [AngularFirestore,
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  { provide: BUCKET, useValue: 'gs://crediautos.appspot.com'},
  LoginEpaycoService,
  TransctionService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
