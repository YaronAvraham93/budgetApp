import { ITransaction } from '../models/index';

const getExpensesByCategories = (transactions: ITransaction[], Type: string) => {
  const filterTransactions = transactions.filter((t) => t.category === Type);
  const categoriesTransactions = filterTransactions.map(({ category }) => category);
  return categoriesTransactions;
};
export default getExpensesByCategories;
