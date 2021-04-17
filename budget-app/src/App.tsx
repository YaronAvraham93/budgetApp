import React from 'react';

import HomePage from './components/organisms/HomePage/HomePage';
import TransactionContextProvider from './contexts/contextTransaction';

function App() {
  return (
    <>
      <TransactionContextProvider>
        <HomePage />
      </TransactionContextProvider>
    </>
  );
}

export default App;
