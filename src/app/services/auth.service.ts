import { Injectable } from '@angular/core';
import { Observable, delay, from, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  

  data: any = {
    token: 'klnsdnLSDIsfasdf4684df2sd5f4',
    user : {
      _id: 5,
      email: 'bryan@gmail.com',
    }
  }
  

  constructor() { }

  getDataApi(): Observable<any> {
    return of(this.data).pipe(delay(500))
  }

  login(email: string, password: string): Observable<any> {
    return of(this.data).pipe(delay(500))
  }

  logout() : Observable<any> {
    return of(true).pipe(delay(500))
  }
}
