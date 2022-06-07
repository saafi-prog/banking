export class Usertransactions {
  reference: number;
  operation_date: Date;
  wording: string;
  amount: number;

  constructor(
    paramReference: number,
    paramOperationDate: Date,
    paramWording: string,
    paramAmount: number
  ) {
    this.reference = paramReference;
    this.operation_date = paramOperationDate;
    this.wording = paramWording;
    this.amount = paramAmount;
  }
}
