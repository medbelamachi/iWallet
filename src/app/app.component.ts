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
    budgets: [new Budget(new Date(), "First Budget")]
  };

  addTransaction(amount: Number) {
    this.appUser.budgets[0].transactions.push(new Transaction(new Date(), amount));
  }

  onSelect(transaction: Transaction) {
    console.log(transaction)
  }
}
