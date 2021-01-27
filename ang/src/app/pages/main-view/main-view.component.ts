import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/expense.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor(private expenseService: ExpenseService) { 
    console.log("initialized")
  }

  ngOnInit(): void {
  }

 

}
