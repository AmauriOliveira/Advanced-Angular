import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { User } from './model/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [],
})
export class CadastroComponent implements OnInit {
  formGroup: FormGroup;
  user: User;
  formResult: String;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      confirmPassword: [''],
    });
  }

  submitForm() {
    if (this.formGroup.valid && this.formGroup.dirty) {
      this.user = Object.assign({}, this.user, this.formGroup.value);
      this.formResult = JSON.stringify(this.formGroup.value);
    } else {
      this.formResult = 'Não Submeteu';
    }
  }
}
