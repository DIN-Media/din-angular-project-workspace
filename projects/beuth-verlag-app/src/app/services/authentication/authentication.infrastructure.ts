import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../../models/user";

@Injectable({providedIn: 'root'})
export class AuthenticationInfrastructure {
  login(email: string, password: string): Observable<User> {
      throw new Error("Method not implemented.");
  }
}
