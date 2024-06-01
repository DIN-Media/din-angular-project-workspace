import {inject, Injectable} from "@angular/core";
import {AuthenticationStore} from "../../store";

@Injectable({providedIn: 'root'})
export class AuthenticationApplication {
  private readonly store = inject(AuthenticationStore);

  /**
   * to log in user with given userName and password to the server
   *
   * @param userName
   * @param password
   */
  login(userName: string, password: string): void {
      this.store.logIn({userName, password});
  }
}
