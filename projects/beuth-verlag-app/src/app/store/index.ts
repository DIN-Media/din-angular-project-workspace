import {User} from "../models/user.index";
import {patchState, signalStore, withComputed, withMethods, withState} from "@ngrx/signals";
import {rxMethod} from "@ngrx/signals/rxjs-interop";
import {concatMap, pipe, tap} from "rxjs";
import {computed, inject} from "@angular/core";
import {AuthenticationInfrastructure} from "../core/authentication/authentication.infrastructure";
import {tapResponse} from "@ngrx/operators";
import {Router} from "@angular/router";
import {SessionService} from "../core/authentication/session.service";
import {RoutingPaths} from "../core/const";


// ::: State to be created :::

/**
 * State of the store
 */
export interface AuthenticationState {
  user: User | undefined | null,
  isLoading: boolean;
}

export type AuthenticateType = {
  username: string,
  password: string
}


// ::: Initial State :::

/**
 * Initial state of the store
 */
const initialState: AuthenticationState = {
  user: undefined,
  isLoading: false
}


// ::: Store :::

/**
 * Store to manage authentication state
 */
export const AuthenticationStore = signalStore(
  /**
   * To provide the store to the application:
   *  The store provided in root mean that the store will be provided to all the components in the application.
   */
  {providedIn: 'root'},

  /**
   * To set an initial state (value) to the store
   */
  withState(initialState),

  /**
   * Signal store computed to check if user is authenticated, to redirect to login page if not.
   */
  withComputed((
    store,
    session: SessionService = inject(SessionService)) => ({
    isAuthenticated: computed((): boolean => session.isAuthenticated()),
  })),

  /**
   * Signal store methods to log in user
   */
  withMethods((
    store,
    router: Router = inject(Router),
    infra: AuthenticationInfrastructure = inject(AuthenticationInfrastructure)) => (
    {
      logIn: rxMethod<AuthenticateType>(
        pipe(
          tap(() => patchState(store, {isLoading: true})),
          concatMap((input: AuthenticateType) => {
            return infra.login(input.username, input.password).pipe(
              tapResponse({
                next: (user: User): void => {
                  patchState(store, {user: user, isLoading: false})
                  router.navigate([RoutingPaths.HOME]).then()
                },
                error: () => patchState(store, {user: undefined, isLoading: false})
              })
            )
          })
        )
      )
    }
  )),

  /**
   * Signal store methods to log out user
   */
  withMethods((
    store,
    router: Router = inject(Router),
    infra: AuthenticationInfrastructure = inject(AuthenticationInfrastructure)) => (
    {
      logOut: rxMethod<void>(
        pipe(
          tap(() => patchState(store, {isLoading: true})),
          concatMap(() => infra.logout().pipe(
            tapResponse({
              next: (): void => {
                patchState(store, {user: undefined, isLoading: false})
                router.navigate([RoutingPaths.AUTH_LOGIN]).then()
              },
              error: () => patchState(store, {user: undefined, isLoading: false})
            })
          ))
        )
      )
    }
  ))
)
