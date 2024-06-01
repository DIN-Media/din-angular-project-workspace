import {inject, Injectable} from "@angular/core";
import {AuthenticationStore} from "../../store";

@Injectable({providedIn: 'root'})
export class AuthenticationApplication {
  private readonly store = inject(AuthenticationStore);

  login(userName: string, password: string): void {
      this.store.logIn({userName, password});
  }
}
