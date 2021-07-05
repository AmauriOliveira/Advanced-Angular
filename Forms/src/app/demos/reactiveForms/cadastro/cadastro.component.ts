import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from './model/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [],
})
export class CadastroComponent implements OnInit {
  formGroup: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: [''],
      cpf: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
    });
  }

  submitForm() {
    this.user = Object.assign({}, this.user, this.formGroup.value);
    console.log(JSON.stringify(this.user, null, 2));
  }
}
