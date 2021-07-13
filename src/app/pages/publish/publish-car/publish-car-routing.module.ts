import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublishCarComponent } from './publish-car.component';

const routes: Routes = [{ path: '', component: PublishCarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishCarRoutingModule { }
