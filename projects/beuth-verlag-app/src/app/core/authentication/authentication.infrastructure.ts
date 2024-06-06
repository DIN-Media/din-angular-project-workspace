import {inject, Injectable} from "@angular/core";
import {Observable, of, throwError} from "rxjs";
import {User} from "../../models/user";
import dataset from "../../../assets/data/users-list.json"
import {SessionService} from "./session.service";


@Injectable({providedIn: 'root'})
export class AuthenticationInfrastructure {
  private readonly sessionService: SessionService = inject(SessionService)

  /**
   * To log in user with the corresponded API
   * -- The API result is actually mocked with users-list.json as dataset
   *
   * @param username
   * @param password
   */
  login(username: string, password: string): Observable<User> {
    const users: User[] = dataset as User[]
    const userFound: User | undefined = users.find((user: User) => user.username === username && user.password === password)

    if(userFound) {
        this.sessionService.setSession(userFound)
        return of(userFound)
    }

    return throwError(() => new Error('Login(): Invalid credentials'))
  }
}
