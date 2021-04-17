import React, { createContext, useReducer } from 'react';
import { IUser, IUserInitialState } from '../models/index';
import userReducer from "./userReducer";
import { ActionType } from '../containers/enums/index';

const initialState = {
  user: [],
  setUser: () => {},
};

export const UserContext = createContext<IUserInitialState>(initialState);
export const UserDispatchContext = React.createContext<Function>(() => {});

const UserProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const setUser = (user: IUser) => {
    dispatch({
      type: ActionType.SET_USER,
      payload: user,
    });
  };
  return <UserContext.Provider value={{ ...state, setUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
