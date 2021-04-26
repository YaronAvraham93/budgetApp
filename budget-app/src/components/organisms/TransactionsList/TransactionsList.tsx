import React from 'react';
import styled from 'styled-components';
import TransactionsCrad from '../../molecules/TransactionsCrad/TransactionsCrad';
import getFormtDate from '../../../helpers/getFormtDate';
import { ITransactionInitialState } from '../../../models';

const SWrapperList = styled.div`
  overflow-x: scroll;
  display: flex;
  align-items: center;
  padding-top: 40px;
`;
const SCountiner = styled.div`
  display: flex;
`;
type ArryTransactions = Pick<ITransactionInitialState, 'transactions'>;
const TransactionsList: React.FC<ArryTransactions> = ({ transactions }) => (
  <SCountiner>
    <SWrapperList>
      {transactions?.map(({ date, amount, currency, paymentMethod, location }) => (
        <TransactionsCrad
          date={getFormtDate(date)}
          paymentType={paymentMethod}
          amount={amount}
          currency={currency}
          country={location.country}
          city={location.city}
        />
      ))}
    </SWrapperList>
  </SCountiner>
);

export default TransactionsList;
