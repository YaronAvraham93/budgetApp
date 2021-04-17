import { ITransaction } from '../models/index';

const filtrByPaymentType = (transactions: ITransaction[], paymentType: string) => {
  const filteredtransactions = transactions.filter((t) => t.paymentType === paymentType);
  return filteredtransactions.map((t) => t.amount);
};

export default filtrByPaymentType;
