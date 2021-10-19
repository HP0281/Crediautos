import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestiosRoutingModule } from './questios-routing.module';
import { QuestiosComponent } from './questios.component';
import { FooterComponent } from '../footer/footer.component';
import { BodyComponent } from '../body/body.component';
import { HeaderModule } from 'src/app/components/header/header.module';


@NgModule({
  declarations: [QuestiosComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    QuestiosRoutingModule,
    HeaderModule
  ]
})
export class QuestiosModule { }
