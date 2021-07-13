import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestiosRoutingModule } from './questios-routing.module';
import { QuestiosComponent } from './questios.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';


@NgModule({
  declarations: [QuestiosComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    QuestiosRoutingModule,
  ]
})
export class QuestiosModule { }
