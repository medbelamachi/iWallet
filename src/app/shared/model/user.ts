import { Transaction } from './transaction';
export class User {
    public id: Number;
    public userName: String;
    public transactions: Transaction[] = []
    constructor() { };
}
