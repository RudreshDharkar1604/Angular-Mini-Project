import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    Login: emptyProps(),
    'Login Success': props<{ user: any }>(),
    'Login Failure': emptyProps(),
    Logout: emptyProps(),
  },
});
