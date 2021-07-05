import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [],
})
export class CadastroComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let name = new FormControl('');
  }
}
//07: