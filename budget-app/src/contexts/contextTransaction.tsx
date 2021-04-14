import React, { useReducer, createContext } from 'react';
import { ITransaction, ITransactionInitialState } from '../models/index';
import transactionReducer from './transactionReducer';

const initialState = {
  transactions: [],
  setTransactions: () => {},
};

export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';

export const TransactionContext = createContext<ITransactionInitialState>(initialState);

const TransactionContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  const setTransactions = (transactions: ITransaction[]) => {
    dispatch({
      type: SET_TRANSACTIONS,
      payload: transactions,
    });
  };

  return <TransactionContext.Provider value={{ ...state, setTransactions }}>{children}</TransactionContext.Provider>;
};

export default TransactionContextProvider;
