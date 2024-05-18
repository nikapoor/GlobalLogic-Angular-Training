import { Router } from '@angular/router';

import { State, Action, StateContext, Selector } from '@ngxs/store';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { AuthStateModel } from './auth.model';
import { LogIn, LogOut } from './auth.actions';

import { User } from './auth.model';
import { AuthService } from '../core/services/auth.service';
import { Injectable } from '@angular/core';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    authenticated: false,
    user: null as any
  }
})

@Injectable()
export class AuthState {
  @Selector()
  static getUser(state: AuthStateModel) {
    return state.user;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel) {
    return state.authenticated;
  }

  @Selector()
  static isConfirmed(state: AuthStateModel) {
    // console.log('--- ', !!state.user && !!state.user.is_confirmed);
    return !!state.user && state.user.is_confirmed;
  }

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}


  @Action(LogIn)
  logIn({ setState, patchState }: StateContext<AuthStateModel>, { payload }: any) {
    return this.auth.logIn(payload).pipe(
      catchError((err, caught) => {
        setState({
          authenticated: false,
          user: null as any
        });
        return throwError(err);
      }),
      tap((result: User ) => {
        setState({
          authenticated: true,
          user: result
        });
      })
    );
  }

  @Action(LogOut)
  logOut({ setState }: StateContext<AuthStateModel>) {
    return this.auth.logOut().pipe(
      catchError((err, caught) => {
        setState({
          authenticated: false,
          user: null as any
        });
        return throwError(err);
      }),
      tap((result: User ) => {
        setState({
          authenticated: false,
          user: null as any
        });
      })
    );
  }

}
