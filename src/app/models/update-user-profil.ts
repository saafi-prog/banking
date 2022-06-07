export class UpdateUserProfil {
  firstName: string;
  lastName: string;
  mobilePhone: number;
  threshold: number;

  constructor(
    paramFirstName: string,
    paramLastName: string,
    parammobilePhone: number,
    paramThreshold: number
  ) {
    this.firstName = paramFirstName;
    this.lastName = paramLastName;
    this.mobilePhone = parammobilePhone;
    this.threshold = paramThreshold;
  }
}
