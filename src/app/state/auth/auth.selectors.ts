import { createFeatureSelector, createSelector } from "@ngrx/store"
import { AuthState } from "./auth.state"


export const authFeature = createFeatureSelector<AuthState>("auth")

export const selectToken = createSelector(
    authFeature,
    (state: AuthState) => state.token
)

export const selectIsLoggedIn = createSelector(
    authFeature,
    (state: AuthState) => (!!state.token && !!state.user)
)

export const selectUserData = createSelector(
    authFeature,
    (state: AuthState) => state.user
)

export const selectIsLoading = createSelector(
    authFeature,
    (state: AuthState) => state.loading
)


