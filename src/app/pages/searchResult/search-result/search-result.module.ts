import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';
import { HeaderResultComponent } from './header-result/header-result.component';
import { BodyResultComponent } from './body-result/body-result.component';
import { FooterResultComponent } from './footer-result/footer-result.component';


@NgModule({
  declarations: [SearchResultComponent, HeaderResultComponent, BodyResultComponent, FooterResultComponent],
  imports: [
    CommonModule,
    SearchResultRoutingModule
  ]
})
export class SearchResultModule { }
