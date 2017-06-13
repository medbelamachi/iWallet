import { Component } from '@angular/core';
import { User } from './shared/model/user';
import { Budget } from './shared/model/budget';
import { Transaction } from './shared/model/transaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iWallet App';
  appUser: User = {
    id: 1,
    userName: 'Med',
    budgets: []
  };
  currentBudget: Budget;

  addNewBudget(label: string, maxAmount: Number) {
    this.appUser.budgets.push(new Budget(label, maxAmount));
  }

  addTransaction(amount: Number) {
    this.currentBudget.transactions.push(new Transaction(new Date(), amount));
  }

  onSelectBudget(budget: Budget) {
    this.currentBudget = budget;
    console.log(budget)
  }
}
