import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductRoutingModule } from './produto.routing';
import { ProductCardDetailsComponent } from './components/product-card-details/product-card-details.component';
import { ProductCountComponent } from './components/product-count/product-count.component';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductCardDetailsComponent,
    ProductCountComponent,
  ],
  imports: [CommonModule, ProductRoutingModule],
  exports: [],
})
export class ProductModule {}
