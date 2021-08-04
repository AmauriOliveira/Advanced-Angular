import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';

const rootRouterConfig: Routes = [
  { path: '', component: ProductDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(rootRouterConfig)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
