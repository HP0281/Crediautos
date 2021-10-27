import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { HeaderProductComponent } from './header-product/header-product.component';
import { FooterProductComponent } from './footer-product/footer-product.component';
import { BodyProductComponent } from './body-product/body-product.component';


@NgModule({
  declarations: [ProductComponent, HeaderProductComponent, FooterProductComponent, BodyProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
