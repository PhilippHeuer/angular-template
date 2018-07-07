/**
 * Dependencies
 */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Action } from '../../state-management.interfaces';
import { ActionTypes } from './auth.actions';

/**
 * Services
 */
import { LocalStorageService } from '../../services/local-storage';

/**
 * Auth Effects
 */
@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false })
  login(): Observable<Action> {
    return this.actions$
      .ofType(ActionTypes.LOGIN)
      .pipe(
        tap(action =>
          this.localStorageService.setItem('AUTH', { isAuthenticated: true })
        )
      );
  }

  @Effect({ dispatch: false })
  logout(): Observable<Action> {
    return this.actions$
      .ofType(ActionTypes.LOGOUT)
      .pipe(
        tap(action =>
          this.localStorageService.setItem('AUTH', { isAuthenticated: false })
        )
      );
  }
}
