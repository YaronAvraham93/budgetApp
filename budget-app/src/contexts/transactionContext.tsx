import React, { useState } from 'react';
import { IPaymentHistoryProps } from '../models/index';

interface Itransaction {
  transactions: IPaymentHistoryProps[];
  setTransactions: (transactions: IPaymentHistoryProps[]) => void;
}
const initialTransactionContext = {
  transactions: [],
  setTransactions: () => {},
};

export const TransactionContext = React.createContext<Itransaction>(initialTransactionContext);

const TransactionProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<IPaymentHistoryProps[]>([]);

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>{children}</TransactionContext.Provider>
  );
};

export default TransactionProvider;
