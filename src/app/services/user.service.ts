import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';
import { backendUrl } from '../constants';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  
  recover(email: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(backendUrl.authService.recover, { email: email }, httpOptions);  
  }

  register(user: User) {
      const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };
      
      const userDet: any = {
        username: user.username,
        password: user.password,
        email: user.email
      };

      return this.http.post(backendUrl.authService.register, userDet, httpOptions);
  }

  listUsers() : Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.get(backendUrl.authService.list, httpOptions) as Observable<User[]>;
  }

  addMoney(user: User, budget: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const body = {
      moneyToAdd: budget,
      id: user.id
    };

    return this.http.post(backendUrl.authService.addMoney, body, httpOptions);
  }
}