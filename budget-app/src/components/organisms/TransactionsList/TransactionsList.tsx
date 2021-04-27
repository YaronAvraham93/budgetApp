import React, { useContext } from 'react';
import styled from 'styled-components';
import TransactionsCrad from '../../molecules/TransactionsCrad/TransactionsCrad';
import getFormtDate from '../../../helpers/getFormtDate';
import { IArrTransactions } from '../../../models';
import { TransactionContext } from '../../../contexts/contextTransaction';

const SWrapperList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 40px;
`;
const SCountiner = styled.div`
  display: flex;
`;

const TransactionsList: React.FC<IArrTransactions> = ({ arrTransactions }) => {
  const { transactions } = useContext(TransactionContext);
  const array: IArrTransactions[] = [];
  const transactionsList = array ? arrTransactions : transactions;
  return (
    <SCountiner>
      <SWrapperList>
        {transactionsList?.map(({ date, amount, currency, paymentMethod, location }) => (
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
};

export default TransactionsList;
