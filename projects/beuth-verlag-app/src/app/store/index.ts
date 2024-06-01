import {User} from "../models/user";
import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import {rxMethod} from "@ngrx/signals/rxjs-interop";
import {pipe, tap} from "rxjs";

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
  withMethods((store) => (
    {
      logIn: rxMethod<AuthenticateType>(
        pipe(
          tap(() => patchState(store, { isLoading: true }))
        )
      )
    }
  ))
)
