import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';

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
  constructor(private http: HttpClient, private config:Config, private router:Router) { }

  user = new BehaviorSubject<User>(null!);
  params = new HttpParams().set('key',this.config.key);
  tokenExpTimer!:any;

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

  autoLogin(){
    if(!localStorage.getItem('userData')) return;

    const userData: {
      email:string,
      id: string,
      _token: string,
      _tokenExpirationDate : string
    } = JSON.parse(localStorage.getItem('userData')!);

    const loggedUser = new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate));
    // loggedUser.token getter from user model
    if(loggedUser.token) this.user.next(loggedUser);

    // expirationTime = future expiraion time in ms - current login time in ms
    const expirationTimer = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
    this.autoLogout(expirationTimer);
  }

  logout(){
    this.user.next(null!);
    localStorage.removeItem('userData');  
    this.router.navigate(['/auth']);
    if(this.tokenExpTimer) clearTimeout(this.tokenExpTimer);
    this.tokenExpTimer = null;
  }

  autoLogout(expirationTime:number){
    this.tokenExpTimer = setTimeout(()=>{
      this.logout();
    }, expirationTime);
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
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
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
