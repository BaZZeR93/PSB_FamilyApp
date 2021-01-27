import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/expense.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  listofexpenses: any[]
  budget : string
  balance: string
  constructor(private expenseService : ExpenseService) { }

  ngOnInit(): void {
  
    this.budget = "10"
    this.balance = "3"
    this.expenseService.getList().subscribe((lists : any[]) =>{
      this.listofexpenses = lists
    })
  }
   //createNewExpense(name:string, value:string)
   createNewExpense() {
    console.log("Button presed")
   this.expenseService.createList("Test","123").subscribe((response: any) => {
      console.log(response);
    });
  }

}
