import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  user: any | null;
  loading: boolean;
}

export const initialState: State = {
  user: null,
  loading: false,
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.login, (state) => ({
    ...state,
    loading: true,
  })),

  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
  })),

  on(AuthActions.loginFailure, (state) => ({
    ...state,
    loading: false,
  })),

  on(AuthActions.logout, () => initialState),
);

export const authFeature = createFeature({
  name: authFeatureKey,
  reducer,
});
