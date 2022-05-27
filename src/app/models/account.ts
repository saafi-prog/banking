export class Account {
  dateCreation: Date;
  bankBalance: number;
  fisrtName: string;
  lastName: string;
  iban: string;

  constructor(
    paramDateCreation: Date,
    paramBankBalance: number,
    paramFirstName: string,
    paramLastName: string,
    paramIban: string
  ) {
    this.bankBalance = paramBankBalance;
    this.dateCreation = paramDateCreation;
    this.fisrtName = paramFirstName;
    this.lastName = paramLastName;
    this.iban = paramIban;
  }
}
