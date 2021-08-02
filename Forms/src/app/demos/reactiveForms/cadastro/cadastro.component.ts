import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';
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
  public MASKS = MASKS;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    let password = new FormControl('', [
      Validators.required,
      CustomValidators.rangeLength([6, 15]),
    ]);
    let confirmPassword = new FormControl('', [
      Validators.required,
      CustomValidators.rangeLength([6, 15]),
      CustomValidators.equalTo(password),
    ]);
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, CustomValidators.rangeLength([4, 150]), ]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      password,
      confirmPassword,
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
