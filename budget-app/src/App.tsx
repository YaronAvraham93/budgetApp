import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TransactionProvider from './contexts/transactionContext';
import HomePage from './components/organisms/HomePage/HomePage';

function App() {
  return (
    <>
      <TransactionProvider>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </TransactionProvider>
    </>
  );
}

export default App;
