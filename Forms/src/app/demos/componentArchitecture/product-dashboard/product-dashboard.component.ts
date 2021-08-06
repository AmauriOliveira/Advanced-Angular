import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styles: [],
})
export class ProductDashboardComponent implements OnInit {
  products: Product[];

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
}
