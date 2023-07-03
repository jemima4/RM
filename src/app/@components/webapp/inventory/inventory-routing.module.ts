import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

const routes: Routes = [
    {path: '', component: InventoryComponent, children: [
        {path: 'products-category', component: ProductsCategoryComponent},
        {path: 'warehouse', component: WarehouseComponent}
    ]},

    
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
