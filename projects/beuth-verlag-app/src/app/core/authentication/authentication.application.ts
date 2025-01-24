import {inject, Injectable, Signal} from "@angular/core";
import {AuthenticationStore} from "../../store";

@Injectable({providedIn: 'root'})
export class AuthenticationApplication {
  private readonly store = inject(AuthenticationStore);

  /**
   * To get isLoading state to show loading spinner
   */
  get isLoading(): Signal<boolean> {
    return this.store.isLoading();
  }

  /**
   * To check if user is authenticated
   */
  get isAuthenticated(): boolean {
    return this.store.isAuthenticated();
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

  /**
   * to log out the currently logged on user from the server.
   */
  logout(): void {
    this.store.logOut();
  }

}
