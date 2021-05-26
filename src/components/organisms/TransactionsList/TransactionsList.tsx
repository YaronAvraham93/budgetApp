import React, { useContext } from 'react';
import styled from 'styled-components';
import TransactionsCrad from '../../molecules/TransactionsCrad/TransactionsCrad';
import getFormtDate from '../../../helpers/getFormtDate';
import { IArrTransactions } from '../../../models';
import { TransactionContext } from '../../../contexts/contextTransaction';
import theme from '../../../style/theme/theme';
import { CurrencyContext } from '../../../contexts/currencyContext';

const { breakpoints } = theme;
const SWrapperList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 40px;
  width: 97%;
  @media (max-width: ${breakpoints.tablet}) {
    height: 100%;
    width: 80%;
    margin-top: 100px;
  }
`;
const SCountiner = styled.div`
  height: 85%;
  display: flex;
`;

const TransactionsList: React.FC<IArrTransactions> = ({ arrTransactions }) => {
  const { transactions } = useContext(TransactionContext);
  const { selectedCurrency, currencyRate } = useContext(CurrencyContext);
  const array: IArrTransactions[] = [];
  const transactionsList = array ? arrTransactions : transactions;
  return (
    <SCountiner>
      <SWrapperList>
        {transactionsList?.map(({ date, amount, paymentMethod, currency, paymentType, location }) => (
          <TransactionsCrad
            date={getFormtDate(date)}
            paymentType={paymentType}
            paymentMethod={paymentMethod}
            amount={amount / currencyRate[currency]}
            currency={selectedCurrency}
            country={location.country}
            city={location.city}
          />
        ))}
      </SWrapperList>
    </SCountiner>
  );
};

export default TransactionsList;
