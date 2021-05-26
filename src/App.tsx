import React from 'react';
import HomePage from './views/pages/HomePage/HomePage';
import TransactionContextProvider from './contexts/contextTransaction';
import UserContextProvider from './contexts/userContext';
import CurrencyContextProvider from './contexts/currencyContext';

function App() {
  return (
    <>
      <CurrencyContextProvider>
        <UserContextProvider>
          <TransactionContextProvider>
            <HomePage />
          </TransactionContextProvider>
        </UserContextProvider>
      </CurrencyContextProvider>
    </>
  );
}

export default App;
