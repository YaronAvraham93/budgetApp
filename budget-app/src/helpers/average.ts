import { IPaymentHistoryProps } from '../models/index';

export const getAverage = (transactions: IPaymentHistoryProps[]) => {
  let total = 0;
  transactions.forEach((item: IPaymentHistoryProps) => {
    total = +item.amount;
  });
  const avregae = total / transactions.length;
  return avregae.toFixed(2);
};

export default getAverage;
