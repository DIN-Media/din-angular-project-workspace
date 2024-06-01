import {User} from "../models/user";
import {signalStore, withState} from "@ngrx/signals";

// state to be created
export interface AuthenticationState {
  user: User | undefined | null,
  isLoading: boolean;
}

// initial state
const initialState: AuthenticationState = {
  user: undefined,
  isLoading: false
}

// reducer / store
export const AuthenticationStore = signalStore(
  {providedIn: 'root'},
  withState(initialState)
)
