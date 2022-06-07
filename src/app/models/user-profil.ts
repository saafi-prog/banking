export class UserProfil {
  firstName: string;
  lastName: string;
  mobilePhone: number;
  iban: string;
  threshold: number;

  constructor(
    paramFirstName: string,
    paramLastName: string,
    parammobilePhone: number,
    paramIban: string,
    paramThreshold: number
  ) {
    this.firstName = paramFirstName;
    this.lastName = paramLastName;
    this.mobilePhone = parammobilePhone;
    this.iban = paramIban;
    this.threshold = paramThreshold;
  }
}
