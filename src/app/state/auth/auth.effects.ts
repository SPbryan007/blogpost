import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { AuthActions } from "./auth.actions";
import { catchError, map, mergeMap, of, tap,  } from "rxjs";


@Injectable()
export class AuthEffects {

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.login),
            mergeMap(({ email, password }) => {
                return this.authService.login(email, password).pipe(
                    map(({ token, user }) => AuthActions.loginSuccess({ token, user })),
                    tap(() => this.router.navigateByUrl('/home')),
                    catchError(() =>  of(AuthActions.loginError()))
                );
            })
        )
    });

    logout$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.logout),
            mergeMap(() => {
                return this.authService.logout().pipe(
                    map(() => AuthActions.removeToken()),
                    tap(() => this.router.navigateByUrl('/login')),
                    catchError(() =>  of())
                );
            })
        )
    });

    
    constructor(
        private readonly actions$: Actions,
        private readonly authService: AuthService,
        private readonly router: Router
    ) { }

    
}