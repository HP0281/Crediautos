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
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { HeaderModule } from './components/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductLeftComponent } from './pages/product-info/product-left/product-left.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { GalleriaComponent } from './pages/product-info/product-left/galleria/galleria.component';
import { FooterResultComponent } from './pages/searchResult/search-result/footer-result/footer-result.component';
import { BodyResultComponent } from './pages/searchResult/search-result/body-result/body-result.component';
import { HeaderResultComponent } from './pages/searchResult/search-result/header-result/header-result.component';
import { SearchResultComponent } from './pages/searchResult/search-result/search-result.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';


@NgModule({
  declarations: [
    AppComponent,
    
    ProductLeftComponent,
    ProductInfoComponent,
    GalleriaComponent,
    SearchResultComponent, 
    HeaderResultComponent, 
    BodyResultComponent, 
    FooterResultComponent, PoliticasComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    HeaderModule,
    ReactiveFormsModule,
  ],
  providers: [AngularFirestore,
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  { provide: BUCKET, useValue: 'gs://crediautos.appspot.com'}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
