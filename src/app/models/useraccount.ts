import { Account } from './account';
import { Usertransactions } from './usertransactions';

export interface Useraccount {
  account: Account;
  transactions: Usertransactions[];
}
