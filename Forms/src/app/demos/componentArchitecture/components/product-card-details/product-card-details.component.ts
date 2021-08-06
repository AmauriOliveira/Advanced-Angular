import { Component, Input } from '@angular/core';
import { Product } from './../../models/product';

@Component({
  selector: 'product-card-details',
  templateUrl: './product-card-details.component.html',
  styles: [],
})
export class ProductCardDetailsComponent {
  @Input() product: Product;
}
