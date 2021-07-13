import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestiosComponent } from './questios.component';

const routes: Routes = [{ path: '', component: QuestiosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestiosRoutingModule { }
