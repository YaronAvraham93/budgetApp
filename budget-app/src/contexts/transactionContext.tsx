import React, { useState } from 'react';
import { ITransaction } from '../models/index';

interface Itransaction {
  transactions: ITransaction[];
  setTransactions: (transactions: ITransaction[]) => void;
}
const initialTransactionContext = {
  transactions: [],
  setTransactions: () => {},
};

export const TransactionContext = React.createContext<Itransaction>(initialTransactionContext);

const TransactionProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>{children}</TransactionContext.Provider>
  );
};

export default TransactionProvider;
