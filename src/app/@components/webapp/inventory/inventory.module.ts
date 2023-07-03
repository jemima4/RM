import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { InventoryRoutingModule } from './inventory-routing.module';

@NgModule({
  declarations: [WarehouseComponent],
  imports: [CommonModule, InventoryRoutingModule],
})
export class InventoryModule {}
