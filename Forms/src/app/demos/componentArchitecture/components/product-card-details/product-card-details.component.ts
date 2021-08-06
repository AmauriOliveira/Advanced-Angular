import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product-card-details',
  templateUrl: './product-card-details.component.html',
  styles: [],
})
export class ProductCardDetailsComponent {
  @Input() product: Product;
  @Output() productEmitter: EventEmitter<Product> = new EventEmitter();

  eventEmitter(): void {
    this.productEmitter.emit(this.product);
  }
}
