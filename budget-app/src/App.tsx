import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/organisms/HomePage/HomePage';
import TransactionContextProvider from './contexts/contextTransaction';

function App() {
  return (
    <>
      <TransactionContextProvider>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </TransactionContextProvider>
    </>
  );
}

export default App;
