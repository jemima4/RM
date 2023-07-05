import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryModule } from './inventory/inventory.module';
import { WebappRoutingModule } from './webapp-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WebappComponent } from './webapp.component';
import { MaterialModule } from 'src/app/@core/styles/material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductsCategoryComponent } from './inventory/products-category/products-category.component';

@NgModule({
  declarations: [WebappComponent, SidebarComponent, DashboardComponent, ProcurementComponent, InventoryComponent, ProductsCategoryComponent],
  imports: [CommonModule, WebappRoutingModule, MaterialModule, InventoryModule],
})
export class WebappModule {}
