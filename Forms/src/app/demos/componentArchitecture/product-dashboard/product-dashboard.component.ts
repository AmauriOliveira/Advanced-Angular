import { ProductCardDetailsComponent } from './../components/product-card-details/product-card-details.component';
import { ProductCountComponent } from './../components/product-count/product-count.component';
import { Product } from './../models/product';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styles: [],
})
export class ProductDashboardComponent implements OnInit, AfterViewInit {
  products: Product[];

  @ViewChild(ProductCountComponent, { static: false })
  count: ProductCountComponent;

  @ViewChild('testToken', { static: false })
  messageScreen: ElementRef;

  @ViewChildren(ProductCardDetailsComponent)
  buttons: QueryList<ProductCardDetailsComponent>;

  constructor() {}

  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: 'Teste',
        active: true,
        price: 100,
        image: 'celular.jpg',
      },
      {
        id: 2,
        name: 'Teste 2',
        active: true,
        price: 200,
        image: 'gopro.jpg',
      },
      {
        id: 3,
        name: 'Teste 3',
        active: true,
        price: 300,
        image: 'laptop.jpg',
      },
      {
        id: 4,
        name: 'Teste 4',
        active: true,
        price: 400,
        image: 'mouse.jpg',
      },
      {
        id: 5,
        name: 'Teste 5',
        active: true,
        price: 500,
        image: 'teclado.jpg',
      },
      {
        id: 6,
        name: 'Teste 6',
        active: false,
        price: 600,
        image: 'headset.jpg',
      },
    ];
  }

  ngAfterViewInit(): void {
    console.log(JSON.stringify(this.count.products, null, 2));

    let textClick: Observable<any> = fromEvent(
      this.messageScreen.nativeElement,
      'click'
    );

    textClick.subscribe(() => {
      alert('clicou no texto');
      return;
    });

    this.buttons.forEach(p => console.log(p.product));
  }

  changeProduct(event: Product) {
    event.active = !event.active;
  }
}
