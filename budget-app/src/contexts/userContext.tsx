import React, { createContext, useReducer } from 'react';
import { IUser, IUserInitialState } from '../models/index';
import userReducer from './reducer/userReducer';
import { ActionType } from '../containers/enums/index';

const initialState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
    currentBalance: '',
    currentBalanceCurrency: '',
    creditCard: [
      {
        expYear: 0,
        expMonth: 0,
        last4Digits: 0,
      },
    ],
  },
  setUser: () => {},
};

export const UserContext = createContext<IUserInitialState>(initialState);

const UserContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const setUser = (user: IUser) => {
    dispatch({
      type: ActionType.SET_USER,
      payload: user,
    });
  };

  return <UserContext.Provider value={{ ...state, setUser }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
