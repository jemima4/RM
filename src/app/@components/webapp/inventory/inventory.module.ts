import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { MaterialModule } from 'src/app/@core/styles/material/material.module';

@NgModule({
  declarations: [WarehouseComponent],
  imports: [CommonModule, InventoryRoutingModule, MaterialModule],
})
export class InventoryModule {}
