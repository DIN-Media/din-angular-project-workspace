import {effect, EffectRef, inject, Injectable, Signal} from "@angular/core";
import {AuthenticationStore} from "../../store";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthenticationApplication {
  private readonly store = inject(AuthenticationStore);
  private readonly router: Router = inject(Router);
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

  /**
   * To get isLoading state to show loading spinner
   */
  get isLoading(): Signal<boolean> {
    return this.store.isLoading;
  }

  /**
   * to log in user with given username and password to the server
   *
   * @param username
   * @param password
   */
  login(username: string, password: string): void {
    this.store.logIn({username, password});
  }

}
