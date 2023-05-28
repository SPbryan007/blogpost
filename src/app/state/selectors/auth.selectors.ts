import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { AuthState } from "src/app/core/models/auth.state";

export const  selectAuthFeature = createFeatureSelector<AuthState>("auth");

export const selectUserAuthenticated = createSelector(
    selectAuthFeature,
    (state: AuthState) => state.user
);

export const selectLoading = createSelector(
    selectAuthFeature,
    (state: AuthState) => state.loading
);