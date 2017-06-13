import { Transaction } from './transaction';
export class Budget {
    id: Number;
    creationDate: Date;
    label: string;
    maxAmount: Number
    public transactions: Transaction[] = []

    constructor(label: string, maxAmount: Number) {
        this.creationDate = new Date();
        this.label = label;
        this.maxAmount = maxAmount;
    }
}
