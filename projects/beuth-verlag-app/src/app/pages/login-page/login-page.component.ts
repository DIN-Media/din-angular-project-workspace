import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AuthenticationApplication} from "../../services/authentication/authentication.application";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatFormFieldModule, MatInputModule, FormsModule, MatIconModule, MatButtonModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  private readonly authApplication: AuthenticationApplication = inject(AuthenticationApplication);

  /**
   * Form to log in.
   */
  loginForm = inject(FormBuilder).group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  /**
   * To log in user with given userName and password to the server.
   */
  login(): void {
    this.authApplication.login(this.email.value, this.password.value);
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
}
