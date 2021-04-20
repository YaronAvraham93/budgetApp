import { ITransaction } from '../models/index';

const getTotalAmountByPaymentType = (transactions: ITransaction[], Type: string) => {
  const obj: any = {};
  transactions.forEach((transaction: ITransaction) => {
    const date = new Date(transaction.date).toLocaleString('default', { month: 'short' });

    if (transaction.paymentType === Type) {
      if (!obj[date]) {
        obj[date] = +transaction.amount;
      } else {
        obj[date] += +transaction.amount;
      }
    }
  });
  const result = Object.entries(obj).map(([month, totalAmount]) => ({ x: month, y: totalAmount }));
  return result;
};

export default getTotalAmountByPaymentType;
