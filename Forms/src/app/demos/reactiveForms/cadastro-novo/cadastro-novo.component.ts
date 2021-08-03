import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';
import { fromEvent, merge, Observable } from 'rxjs';

import {
  DisplayMessage,
  GenericValidator,
  ValidationMessages,
} from './generic-form-validation';
import { User } from './model/user';

@Component({
  selector: 'app-cadastro-novo',
  templateUrl: './cadastro-novo.component.html',
  styles: [],
})
export class CadastroNovoComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  formGroup: FormGroup;
  user: User;
  formResult: String;
  public MASKS = MASKS;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private formBuilder: FormBuilder) {
    this.validationMessages = {
      name: {
        required: 'O nome é obrigatório.',
        minlength: 'O nome precisa ter no mínimo 4 caracteres.',
        maxlength: 'O nome precisa ter no máximo 150 caracteres.',
      },
      cpf: {
        required: 'O CPF é obrigatório.',
        cpf: 'CPF inválido.',
      },
      email: {
        required: 'O e-mail é obrigatório.',
        email: 'E-mail inválido.',
      },
      password: {
        required: 'A senha é obrigatória.',
        minlength: 'A senha precisa ter no mínimo 6 caracteres.',
        maxlength: 'A senha precisa ter no máximo 15 caracteres.',
      },
      confirmPassword: {
        required: 'A confirmação da senha é obrigatória.',
        equalTo: 'As senhas não conferem.',
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    let password = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]);
    let confirmPassword = new FormControl('', [
      Validators.required,
      CustomValidators.equalTo(password),
    ]);
    this.formGroup = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(150),
        ],
      ],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      password,
      confirmPassword,
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.messagesProcess(
        this.formGroup
      );
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
