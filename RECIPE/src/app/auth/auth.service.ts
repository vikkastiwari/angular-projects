import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { Config } from 'src/config';
import { User } from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private config:Config) { }

  user = new Subject<User>();
  params = new HttpParams().set('key',this.config.key);

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        this.config.baseurl+':signUp',
        {
          email: email,
          password: password,
          returnSecureToken: true
        },
        {
          params:this.params
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        })
      );
  }

  login(email:string, password:string){
    return this.http
      .post<AuthResponseData>(
        this.config.baseurl+':signInWithPassword',
      {
        email: email,
        password: password,
        returnSecureToken: true
      },
      {
        params:this.params
      }
    )
    .pipe(
      catchError(this.handleError),
      tap(resData => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
      })
    );
  }

  private handleAuthentication(
    email:string,
    userId:string,
    token:string,
    expiresIn:number
  ){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email,userId,token,expirationDate);
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse){
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => new Error(errorMessage));
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email is not available';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email doesn\'t exists';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Email or Password invalid';
        break;
    }
    return throwError(() => new Error(errorMessage));
  }
}
