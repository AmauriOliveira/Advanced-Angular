import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductRoutingModule } from './produto.routing';

@NgModule({
  declarations: [ProductDashboardComponent],
  imports: [CommonModule, RouterModule, ProductRoutingModule],
  exports: [],
})
export class ProductModule {}
