import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [],
})
export class CadastroComponent implements OnInit {
  formGroup: FormGroup;
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
    let x = this.formGroup.value;
  }
}
