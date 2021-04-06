import React, { useState } from 'react';
import { IUserrofileProps } from '../models/index';

export const initialUserContext = {
  firstName: '',
  lastName: '',
  email: '',
  avatar: '',
};

export const UserContext = React.createContext<IUserrofileProps>(initialUserContext);
export const UserDispatchContext = React.createContext<Function>(() => {});

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUserrofileProps>(initialUserContext);

  return (
    <UserContext.Provider value={{ ...user }}>
      <UserDispatchContext.Provider value={setUser}>{children}</UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export default UserProvider;
