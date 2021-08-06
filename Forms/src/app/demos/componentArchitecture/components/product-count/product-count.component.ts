import { Component, Input } from '@angular/core';
import { Product } from './../../models/product';

@Component({
  selector: 'product-count',
  templateUrl: './product-count.component.html',
  styles: [],
})
export class ProductCountComponent {
  @Input() products: Product[];

  activeProductCounter(): number {
    if (!this.products) {
      return 0;
    }
    return this.products.filter((product: Product) => product.active).length;
  }
}
