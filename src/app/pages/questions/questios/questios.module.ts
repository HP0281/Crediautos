import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestiosRoutingModule } from './questios-routing.module';
import { QuestiosComponent } from './questios.component';
import { BodyComponent } from '../body/body.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  declarations: [QuestiosComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    QuestiosRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class QuestiosModule { }
