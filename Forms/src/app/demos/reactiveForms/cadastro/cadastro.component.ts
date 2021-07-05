import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [],
})
export class CadastroComponent implements OnInit {
  formGroup: FormGroup;
  constructor() {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl(''),
      cpf: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
  }

  submitForm() {
    let x = this.formGroup.value;
    console.log('====================================');
    console.log(x);
    console.log('====================================');
  }
}
