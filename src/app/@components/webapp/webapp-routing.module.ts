import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebappComponent } from './webapp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProcurementComponent } from './procurement/procurement.component';

const routes: Routes = [
  {
    path: '',
    component: WebappComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'procurement',
        component: ProcurementComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebappRoutingModule {}
