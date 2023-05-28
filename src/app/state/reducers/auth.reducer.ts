import { createReducer, on } from '@ngrx/store';

import { authenticateUser, userAuthenticated } from '../actions/auth.actions';
import { UserModel } from 'src/app/core/models/user.interface';
import { AuthState } from 'src/app/core/models/auth.state';

export const initialState:  AuthState = { loading: false, isLoggedIn: false, user: null };



export const authReducer = createReducer(
  initialState,
  on(authenticateUser,  (state ) => ({ ...state, loading: true })),
  on(userAuthenticated, (state, { user }) => ({ ...state, loading: false, isLoggedIn: true, user }))
);