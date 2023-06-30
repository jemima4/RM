import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebappComponent } from './webapp.component';

const routes: Routes = [{ path: '', component: WebappComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebappRoutingModule {}
