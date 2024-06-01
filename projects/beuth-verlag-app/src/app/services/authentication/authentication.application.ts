import {effect, EffectRef, inject, Injectable, Signal} from "@angular/core";
import {AuthenticationStore} from "../../store";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthenticationApplication {
  private readonly store = inject(AuthenticationStore);
  private readonly router: Router = inject(Router);

  /**
   * to log in user with given userName and password to the server
   *
   * @param userName
   * @param password
   */
  login(userName: string, password: string): void {
    this.store.logIn({userName, password});
  }

  /**
   * To get isLoading state to show loading spinner
   */
  get isLoading(): Signal<boolean> {
      return this.store.isLoading;
  }

  /**
   * To check if user is authenticated
   */
  get isAuthenticated(): Signal<boolean> {
      return this.store.isAuthenticated;
  }

  /**
   * Redirect to Home page if user is authenticated
   *
   * @private
   */
  private redirectToLoginEffect: EffectRef = effect((): void => {
    if (this.store.isAuthenticated()) {
      this.router.navigate(['home']).then();
    }
  })

}
