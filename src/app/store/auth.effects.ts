// import { Injectable } from '@angular/core';
// import { Effect, Actions } from '@ngrx/effects';
// import { User } from './auth.models';
// import { AuthService } from '../providers/auth.service';
// import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/observable/fromPromise';
// import 'rxjs/add/observable/of';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/do';

// import * as authActions from './auth.actions';
// import { Router } from '@angular/router';

// export type Action = authActions.All

// @Injectable()
// export class UserEffects {
//     constructor(private router: Router, private authservice: AuthService, private actions: Actions) {}

//     @Effect()
//     signup$: Observable<Action> = this.actions.ofType(authActions.SIGNUP)
//         .map((action: authActions.Signup) => action.payload)
//         .switchMap(payload => {
//             return Observable.fromPromise(this.authservice.signup(payload.user))
//         })
//         .map(credentials => {
//             return new authActions.SignupSuccess
//         })
//         .do(() => this.router.navigate(['/login']))
//         .catch(err => {
//             return Observable.of(new authActions.AuthError({error: err.message}))
//         })


//     @Effect()
//     signin$: Observable<Action> = this.actions.ofType(authActions.SIGNIN)
//             .map((action: authActions.Signin) => action.payload)
//             .switchMap(payload => {
//                 return Observable.fromPromise(this.authservice.signin(payload.user))
//             })
//             .map(credentials => {
//                 return new authActions.SigninSuccess
//             })
//             .do(() => this.router.navigate(['/dashboard']))
//             .catch(err => {
//                 return Observable.of(new authActions.AuthError({error: err.message}))
//             })

//     @Effect()
//     signout$: Observable<Action> = this.actions.ofType(authActions.LOGOUT)
//                 .map((action: authActions.Logout) => action.payload)
//                 .switchMap(payload => {
//                     return Observable.fromPromise(this.authservice.signout())
//                 })
//                 .map(credentials => {
//                     return new authActions.LogoutSuccess
//                 })
//                 .do(() => this.router.navigate(['/login']))
//                 .catch(err => {
//                     return Observable.of(new authActions.AuthError({error: err.message}))
//                 })

// }