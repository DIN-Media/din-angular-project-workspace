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

  loginForm = inject(FormBuilder).group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  login(): void {
    this.authApplication.login(this.email.value, this.password.value);
  }

  get email(): FormControl {
    return this.loginForm.controls.email;
  }

  get password(): FormControl {
    return this.loginForm.controls.password;
  }

  get isValid(): boolean {
      return this.loginForm.valid;
  }
}
