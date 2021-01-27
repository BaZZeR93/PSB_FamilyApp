import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webRequestService: WebRequestService) { }

  createUser(name:string, email: string, pass: string){
    return this.webRequestService.post('users',{name, email, pass});
  }

  authUser(email:string, pass:string){
    return this.webRequestService.post('authUser',{email,pass});
  }

  recover(email:string){
    return this.webRequestService.post('recover',{email});
  }
}
