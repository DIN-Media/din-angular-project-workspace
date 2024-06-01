import {effect, EffectRef, inject, Injectable} from "@angular/core";
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

  private redirectToLoginEffect: EffectRef = effect((): void => {
    if (this.store.isAuthenticated()) {
      this.router.navigate(['home']).then();
    }
  })
}
