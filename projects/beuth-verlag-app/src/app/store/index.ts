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
  {providedIn: 'root'},

  withState(initialState),

  withComputed(store => ({
    isAuthenticated: computed(() => store.user())
  })),

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
