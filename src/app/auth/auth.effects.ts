import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth';
import * as AuthActions from './auth.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {

  private actions$ = inject(Actions);
  private authService = inject(AuthService);

  login$ = createEffect(() =>
    
    
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ email, password, role }) =>
        
        this.authService.login({ email, password, role }).pipe(
          map((res: any) =>
            AuthActions.loginSuccess({
              token: res.token,
              role: res.role,
            })
          ),
          catchError((err) =>
            of(
              AuthActions.loginFailure({
                error: err?.error || 'Login failed',
              })
            )
          )
        )
      )
    )
  );
}

