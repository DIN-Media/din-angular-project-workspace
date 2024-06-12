import { ComponentFixture, TestBed } from '@angular/core/testing';

import dataset from "../../../assets/data/users-list.json";
import { LoginPageComponent } from './login-page.component';
import {User} from "../../models/user.index";

describe('LoginPageComponent', (): void => {
  let users: User[];
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [LoginPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    users = dataset as User[];
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });

  // Mat-Card
  it('should have a mat-card element', (): void => {
    const matCardElement = fixture.nativeElement.querySelector('mat-card');
    expect(matCardElement).toBeTruthy();

    it(':: mat-card should have: title, content and footer element', (): void => {
      const titleElement = fixture.nativeElement.querySelector('mat-card-title');
      const contentElement = fixture.nativeElement.querySelector('mat-card-content');
      const footerElement = fixture.nativeElement.querySelector('mat-card-footer');
      expect(titleElement && contentElement && footerElement).toBeTruthy();
    });
  });

  // Form
  it('should have a form element', (): void => {
    const formElement = fixture.nativeElement.querySelector('form');
    expect(formElement).toBeTruthy();

    it(':: form should have: inputs fields for email and password', (): void => {
      const emailInput = fixture.nativeElement.querySelector('input[type="email"]');
      const passwordInput = fixture.nativeElement.querySelector('input[type="password"]');
      expect(emailInput && passwordInput).toBeTruthy();
    });
  });

  // Button
  it('should have a submit button', (): void => {
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton).toBeTruthy();
  });

  it('should disable submit button when form is invalid', (): void => {
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('');
    fixture.detectChanges();
    expect(submitButton.disabled).toBeTruthy();
  });

  it('should enable submit button when form is valid', (): void => {
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    component.loginForm.controls['email'].setValue(users[0].username);
    component.loginForm.controls['password'].setValue(users[0].password);
    fixture.detectChanges();
    expect(submitButton.disabled).toBeFalsy();
  });
});
