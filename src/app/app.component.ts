import { Component } from '@angular/core';
import { User } from './shared/model/user';
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
    transactions: [new Transaction(new Date(), 100)]
  };

  addTransaction(amount: Number) {
    this.appUser.transactions.push(new Transaction(new Date(), amount));
  }

  onSelect(transaction: Transaction) {
    console.log(transaction)
  }
}
