export default class Transaction {
  constructor(
    id,
    unitId,
    residentId,
    transactionDate,
    rentStartDate,
    rentEndDate,
    billingDate,
    period,
    price,
    profit
  ) {
    // (autogenerated at backend)
    this.unitId = unitId; // (id from ApartmentUnit)
    this.residentId = residentId; // (id from Resident)
    this.transactionDate = transactionDate || undefined; //Date;
    this.rentStartDate = rentStartDate || undefined; //Date;
    this.rentEndDate = rentEndDate || undefined; //Date;
    this.billingDate = billingDate || undefined; //Date;
    this.period = period || undefined; //number;
    this.price = price || undefined; //number;
    this.profit = profit || undefined; //number;
  }
}
