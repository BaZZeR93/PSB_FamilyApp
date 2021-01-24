import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';
import { backendUrl } from '../constants';

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

      return this.http.post(backendUrl.authService.register, {username: user.username,
      password: user.password,
      email: user.email}, httpOptions);
  } 
}