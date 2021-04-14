import { ITransaction } from '../models/index';

const filtredByPaymentType = (transactions: ITransaction[], str: string) => {
  const filteredtransactions = transactions.filter((t) => t.paymentType === str);
  return filteredtransactions.map((t) => t.amount);
};

export default filtredByPaymentType;
