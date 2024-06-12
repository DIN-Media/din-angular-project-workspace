import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AuthenticationApplication} from "../../core/authentication/authentication.application";
import {SpinnerComponent} from "../../core/components/spinner/spinner.component";
import {NgOptimizedImage} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

import dataset from "../../../assets/data/hyperlinks.json";
import {Hyperlink} from "../../models/hyperlink";
import {merge} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {ErrorMessage, ErrorType} from "../../core/const";
import {MatTooltipModule} from "@angular/material/tooltip";
import {DinLogoComponent} from "../../core/components/din-logo/din-logo.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatFormFieldModule, MatInputModule, FormsModule, MatIconModule, MatButtonModule,
    SpinnerComponent, NgOptimizedImage, MatCardModule, MatTooltipModule, DinLogoComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  readonly hyperlinks: Hyperlink[] = dataset as Hyperlink[];
  readonly resetPasswordText: string = "Reset Password";
  readonly inputNames: string[] = ['email', 'password']

  emailErrorMessage: string | undefined = ErrorMessage.EMAIL_REQUIRED;
  passwordErrorMessage: string | undefined = ErrorMessage.PASSWORD_REQUIRED;
  hidePwd: boolean = true;

  /** Form for login credentials. ***/
  loginForm = inject(FormBuilder).group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  private readonly authApplication: AuthenticationApplication = inject(AuthenticationApplication);

  constructor() {
    // to update the email error message
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage(this.inputNames[0]));

    // to update the password error message
    merge(this.password.statusChanges, this.password.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage(this.inputNames[1]));
  }

  /**
   * To get email form
   */
  get email(): FormControl {
    return this.loginForm.controls.email;
  }

  /**
   * To get password form
   */
  get password(): FormControl {
    return this.loginForm.controls.password;
  }

  /**
   * To check if form is valid.
   */
  get isValid(): boolean {
    return this.loginForm.valid;
  }

  get resetPasswordLink(): string | undefined {
    return this.hyperlinks.find((hyperlink: Hyperlink): boolean => hyperlink.name === this.resetPasswordText)?.url
  }

  /**
   * To log in user with given userName and password to the server.
   */
  login(): void {
    this.authApplication.login(this.email.value, this.password.value);
  }

  private updateErrorMessage(inputName: string): void {
    if (inputName === this.inputNames[0]) {
      this.emailErrorMessage = this.email.hasError(ErrorType.REQUIRED)
        ? ErrorMessage.EMAIL_REQUIRED
        : this.emailErrorMessage = this.email.hasError(ErrorType.EMAIL)
          ? ErrorMessage.EMAIL_INVALID : undefined;
    }

    if (inputName === this.inputNames[2]) {
      this.passwordErrorMessage = this.password.hasError(ErrorType.REQUIRED)
        ? ErrorMessage.PASSWORD_REQUIRED
        : undefined
    }
  }

}
