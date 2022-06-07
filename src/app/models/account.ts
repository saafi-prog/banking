export class Account {
  bankBalance: number;
  dateCreation: Date;
  iban: string;

  constructor(
    paramBankBalance: number,
    paramDateCreation: Date,
    paramIban: string
  ) {
    this.bankBalance = paramBankBalance;
    this.dateCreation = paramDateCreation;
    this.iban = paramIban;
  }
}
