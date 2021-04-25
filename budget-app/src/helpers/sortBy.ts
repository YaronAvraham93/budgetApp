import { ITransaction } from '../models/index';

const sortBy = (transactions: ITransaction[], value: any) => {
  const sortedTransactons = transactions.sort((a: ITransaction, b: ITransaction) => {
    const keyOne = a[value];
    const keyTwo = b[value];

    if (keyOne < keyTwo) {
      return -1;
    }
    if (keyOne > keyTwo) {
      return 1;
    }
    return 0;
  });
  return sortedTransactons;
};

export default sortBy;
