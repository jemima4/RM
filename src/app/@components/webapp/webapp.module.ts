import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebappRoutingModule } from './webapp-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WebappComponent } from './webapp.component';
import { MaterialModule } from 'src/app/@core/styles/material/material.module';

@NgModule({
  declarations: [WebappComponent, SidebarComponent],
  imports: [CommonModule, WebappRoutingModule, MaterialModule],
})
export class WebappModule {}
