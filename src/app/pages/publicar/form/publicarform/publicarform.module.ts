import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicarformRoutingModule } from './publicarform-routing.module';
import { PublicarformComponent } from './publicarform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/components/header/header.module';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [PublicarformComponent],
  imports: [ 
    CommonModule,
    PublicarformRoutingModule,
    ReactiveFormsModule, 
    HeaderModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule

  ]
})
export class PublicarformModule { }
