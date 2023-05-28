import { createReducer, on } from "@ngrx/store";
import { AuthState, initialState } from "./auth.state";
import { AuthActions } from "./auth.actions";

export const authReducer = createReducer(
    initialState,
    on(AuthActions.setToken, (state, { token }) : AuthState => ({ ...state, token, loading: false })),
    on(AuthActions.setUser, (state, { user }) : AuthState => ({ ...state, user })),
    on(AuthActions.loginSuccess, (state, { token, user }) : AuthState => ({ ...state, token, user, loading: false })),
    on(AuthActions.loginError, state  => ({ ...state, loading: false })),
    on(AuthActions.removeToken, (state) : AuthState => ({ ...state, token: "" })),
    on(AuthActions.login, (state) : AuthState => ({ ...state, loading: true })),
    on(AuthActions.logout, (state) : AuthState => ({ ...state }))
)