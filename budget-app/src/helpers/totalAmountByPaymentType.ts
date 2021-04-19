import { ITransaction } from '../models/index';

const getTotalAmountByPaymentType = (transactions: ITransaction[], Type: string) => {
  const helper: any = {};
  // const helperExpenses: any = {};
  transactions.forEach((transaction: ITransaction) => {
    const date = new Date(transaction.date).toLocaleString('default', { month: 'short' });

    if (transaction.paymentType === Type) {
      if (!helper[date]) {
        helper[date] = transaction.amount;
      } else {
        helper[date] = +transaction.amount;
      }
    }
  });
  const result = Object.entries(helper).map(([month, totalAmount]) => ({ x: month, y: totalAmount }));
  return result;
};

export default getTotalAmountByPaymentType;
