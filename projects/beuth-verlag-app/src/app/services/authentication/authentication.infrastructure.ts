import {Injectable} from "@angular/core";
import {delay, Observable, of} from "rxjs";
import {User} from "../../models/user";

const fakeService: AuthenticationInfrastructure = {
  login(email: string, password: string): Observable<User>  {
    const user: User = {
      id: 1,
      email: email,
      password: password
    }

    return of(user).pipe(delay(1500))
  }
}

@Injectable({
  providedIn: 'root',
  useValue: fakeService
})
export class AuthenticationInfrastructure {
  login(email: string, password: string): Observable<User> {
    throw new Error("Method not implemented.");
  }
}
