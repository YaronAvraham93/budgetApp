import { ITransaction } from '../models/index';

const getAverage = (transactions: ITransaction[], currencyRates: any) => {
  let total = 0;

  transactions.forEach((transaction: ITransaction) => {
    total += transaction.amount / currencyRates[transaction.currency];
  });

  const average = total / transactions.length;
  return average.toFixed(2);
};

export default getAverage;
