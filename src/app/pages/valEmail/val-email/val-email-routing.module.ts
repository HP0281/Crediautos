import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValEmailComponent } from './val-email.component';

const routes: Routes = [{ path: '', component: ValEmailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValEmailRoutingModule { }
