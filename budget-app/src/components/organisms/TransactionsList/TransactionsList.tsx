import React, { useContext } from 'react';
import styled from 'styled-components';
import TransactionsInfo from '../../molecules/TransactionsCrad/TransactionsCrad';
import { TransactionContext } from '../../../contexts/contextTransaction';
import getFormtDate from '../../../helpers/getFormtDate';

const SWrapper = styled.div`
  flex-direction: column;
`;
const TransactionsList: React.FC = () => {
  const { transactions } = useContext(TransactionContext);
  return (
    <SWrapper>
      {transactions?.map(({ date, amount, currency, paymentMethod, location }) => (
        <TransactionsInfo
          date={getFormtDate(date)}
          paymentType={paymentMethod}
          amount={amount}
          currency={currency}
          country={location.country}
          city={location.city}
        />
      ))}
    </SWrapper>
  );
};

export default TransactionsList;
