import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebappRoutingModule } from './webapp-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WebappComponent } from './webapp.component';
import { MaterialModule } from 'src/app/@core/styles/material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProcurementComponent } from './procurement/procurement.component';

@NgModule({
  declarations: [WebappComponent, SidebarComponent, DashboardComponent, ProcurementComponent],
  imports: [CommonModule, WebappRoutingModule, MaterialModule],
})
export class WebappModule {}
