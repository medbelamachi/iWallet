import { Transaction } from './transaction';
export class Budget {
    id: Number;
    creationDate: Date;
    label: string;
    public transactions: Transaction[] = []

    constructor(creationDate: Date, label: string) {
        this.label = label;
        this.creationDate = creationDate;
    }
}
