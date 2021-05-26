import { ITransaction } from '../models/index';

const filterRange = (transactions: ITransaction[], start: number, end: number) => {
  const filteredtransactions = transactions.filter((t) => t.amount >= start && t.amount <= end);
  return filteredtransactions;
};

export default filterRange;
