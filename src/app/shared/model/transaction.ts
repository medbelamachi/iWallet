export class Transaction {
    id: Number;
    creationDate: Date;
    amount: Number;

    constructor(creationDate: Date, amount: Number) {
        this.amount = amount;
        this.creationDate = creationDate;
    }
}
