import React, { useReducer, createContext } from 'react';
import { ITransaction, ITransactionInitialState } from '../models/index';
import transactionReducer from './transactionReducer';
import { ActionType } from '../containers/enums/index';

const initialState = {
  transactions: [],
  setTransactions: () => {},
};

export const TransactionContext = createContext<ITransactionInitialState>(initialState);

const TransactionContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  const setTransactions = (transactions: ITransaction[]) => {
    dispatch({
      type: ActionType.SET_TRANSACTIONS,
      payload: transactions,
    });
  };

  return <TransactionContext.Provider value={{ ...state, setTransactions }}>{children}</TransactionContext.Provider>;
};

export default TransactionContextProvider;
