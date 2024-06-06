import {Injectable} from '@angular/core'
import {User} from "../../models/user";


@Injectable({providedIn: 'root'})
export class SessionService {
  private readonly authTokenKey: string = 'authToken'
  private readonly userIdKey: string = 'userId'

  /*** check if current user is authenticated ***/
  isAuthenticated(): boolean {
    return !!this.getToken()
  }

  /*** to set the session ***/
  setSession(user: User): void {
    this.setToken(user.session.accessToken)
    this.setUserId(user.id)
  }

  /*** to clear the session ***/
  clearSession(): void {
    sessionStorage.clear()
  }

  /*** about the authenticated token ***/
  setToken(token: string): void {
    sessionStorage.setItem(this.authTokenKey, token)
  }

  getToken(): string | null {
    const token: string | null = sessionStorage.getItem(this.authTokenKey)
    return token || null
  }

  /*** about the userId ***/
  setUserId(userId: string): void {
    sessionStorage.setItem(this.userIdKey, userId)
  }

  getUserId(): string | null {
    return sessionStorage.getItem(this.userIdKey)
  }

}
