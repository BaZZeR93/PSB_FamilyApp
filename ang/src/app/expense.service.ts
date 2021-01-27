import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private webRequestService: WebRequestService) { }

  createList(name:string, value:string)
  {
    //here we want to send a web request to create a list
    return this.webRequestService.post('expenses',{name, value});
  }

  getList() {
    return this.webRequestService.get('expenses');
  }
}
