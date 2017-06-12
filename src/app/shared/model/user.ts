import { Budget } from './budget';
export class User {
    public id: Number;
    public userName: String;
    public budgets: Budget[] = []
    constructor() { };
}
