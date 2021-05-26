import React, { useReducer, createContext } from 'react';
import { ICurrency } from '../models/index';
import { ActionType } from '../containers/enums/index';
import currencyReducer from './reducer/currencyReducer';

const initialState = {
  selectedCurrency: 'USD',
  currencyRate: {},
  setSelectCurrency: () => {},
  setCurrencyRate: () => {},
};

export const CurrencyContext = createContext<ICurrency>(initialState);

const CurrencyContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(currencyReducer, initialState);

  const setSelectCurrency = (selectedCurrency: string) => {
    dispatch({ type: ActionType.SET_CURRECNY, payload: selectedCurrency });
  };
  const setCurrencyRate = (currencyRate: object) => {
    dispatch({ type: ActionType.SET_CURRENCY_RATE, payload: currencyRate });
  };

  return (
    <CurrencyContext.Provider value={{ ...state, setCurrencyRate, setSelectCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
