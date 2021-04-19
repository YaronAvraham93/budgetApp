import React from 'react';

import HomePage from './components/organisms/HomePage/HomePage';
import TransactionContextProvider from './contexts/contextTransaction';
import UserContextProvider from './contexts/userContext';

function App() {
  return (
    <>
      <UserContextProvider>
        <TransactionContextProvider>
          <HomePage />
        </TransactionContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
