// auth.actions.ts

import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login', props<{ username: string, password: string }>());
export const logout = createAction('[Auth] Logout');
export const loginSuccess = createAction('[Auth] Login Success', props<{ role: string }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());
