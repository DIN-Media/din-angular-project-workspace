import {inject, Injectable} from "@angular/core";
import {Observable, of, throwError} from "rxjs";
import {User} from "../../models/user.index";
import dataset from "../../../assets/data/users-list.json"
import {SessionService} from "./session.service";


@Injectable({providedIn: 'root'})
export class AuthenticationInfrastructure {
  private readonly sessionService: SessionService = inject(SessionService)
  private readonly users: User[] = dataset as User[]

  /**
   * To log in user with the corresponded API
   * -- The API result is actually mocked with users-list.json as dataset
   *
   * @param username
   * @param password
   */
  login(username: string, password: string): Observable<User> {
    const userFound: User | undefined = this.users.find((user: User): boolean => user.username === username && user.password === password)

    if(userFound) {
        this.sessionService.setSession(userFound)
        return of(userFound)
    }

    return throwError(() => new Error('Login(): Invalid credentials'))
  }

  /**
   * To log out user with the corresponded API
   * -- The API result is currently being mocked thanks to users-list.json as dataset
   */
  logout(): Observable<undefined> {
    const onlineUserSessionToken: string | null = this.sessionService.getToken()
    let userFound: User | undefined = undefined

    /**
     *  The current session must be revoked if the access token exists in the session store.
     *  -- This action is currently being mocked thanks to "userFound".
     */
    onlineUserSessionToken
      ? userFound = this.users.find((user: User): boolean => user.session.accessToken === onlineUserSessionToken)
      : throwError(() => new Error('Logout(): No access token found in session storage'))

    if (!userFound) {
      throwError(() => new Error('Logout(): Current session could not be revoked'))
    }

    this.sessionService.clearSession()
    return of(undefined)
  }
}
