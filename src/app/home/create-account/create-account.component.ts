import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmAndPasswordNotEquals } from './CustomValidators/ConfirmAndPasswordNotEquals.validator';
import { lowerCaseValidator } from './CustomValidators/lowerCase.valitador';
import { UserAndPasswordEqualsValidator } from './CustomValidators/UserAndPasswordEquals.validator';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  createAccountForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createAccountForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required]],
        userName: ['', [Validators.required, lowerCaseValidator]],
        password: ['', [Validators.required, Validators.min(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: [
          UserAndPasswordEqualsValidator,
          ConfirmAndPasswordNotEquals,
        ],
      }
    );
  }

  register() {
    console.log(this.createAccountForm.getRawValue());
  }
}
