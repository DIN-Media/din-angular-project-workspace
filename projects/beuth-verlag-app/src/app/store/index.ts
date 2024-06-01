import {User} from "../models/user";
import {patchState, signalStore, withComputed, withMethods, withState} from "@ngrx/signals";
import {rxMethod} from "@ngrx/signals/rxjs-interop";
import {concatMap, pipe, tap} from "rxjs";
import {computed, inject} from "@angular/core";
import {AuthenticationInfrastructure} from "../services/authentication/authentication.infrastructure";
import {tapResponse} from "@ngrx/operators";

// state to be created
export interface AuthenticationState {
  user: User | undefined | null,
  isLoading: boolean;
}

export type AuthenticateType = {
  userName: string,
  password: string
}

// initial state
const initialState: AuthenticationState = {
  user: undefined,
  isLoading: false
}

// reducer / store
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
   * Signal store computed to check if user is authenticated
   */
  withComputed(store => ({
    isAuthenticated: computed((): boolean => store.user() !== undefined),
  })),

  /**
   * Signal store methods to log in user
   */
  withMethods((store, infra: AuthenticationInfrastructure = inject(AuthenticationInfrastructure)) => (
    {
      logIn: rxMethod<AuthenticateType>(
        pipe(
          tap(() => patchState(store, { isLoading: true })),
          concatMap((input: AuthenticateType) => {
            return infra.login(input.userName, input.password).pipe(
              tapResponse({
                next: (user: User) => patchState(store, {user, isLoading: false}),
                error: () => patchState(store, {user: undefined, isLoading: false})
              })
            )
          })
        )
      )
    }
  ))
)
