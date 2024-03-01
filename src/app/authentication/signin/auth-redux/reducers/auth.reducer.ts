// auth.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { login, logout, loginSuccess, loginFailure } from './auth.actions';

export interface AuthState {
  user: { username: string; role: string } | null;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, error: null })),
  on(logout, (state) => ({ ...state, user: null, isAuthenticated: false, error: null })),
  on(loginSuccess, (state, { role }) => ({
    ...state,
    isAuthenticated: true,
    user: { username: state.user?.username || '', role },
    error: null,
  })),
  on(loginFailure, (state, { error }) => ({ ...state, isAuthenticated: false, error })),
);
