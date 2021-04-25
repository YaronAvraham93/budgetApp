import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import TransactionsInfo from '../../molecules/TransactionsCrad/TransactionsCrad';
import { TransactionContext } from '../../../contexts/contextTransaction';
import getFormtDate from '../../../helpers/getFormtDate';
import sortBy from '../../../helpers/sortBy';

const SWrapper = styled.div`
  flex-direction: column;
`;
const SSelect = styled.select``;
const SSelectWrapper = styled.div`
  display: flex;
  padding-left: 40px;
`;

const TransactionsList: React.FC = () => {
  const { transactions } = useContext(TransactionContext);
  const [sorted, setSorted] = useState(transactions);
  const b = [...transactions];
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const sortedTransactions = sortBy(b, value);
    setSorted(sortedTransactions);
  };

  return (
    <SWrapper>
      <SSelectWrapper>
        <SSelect onChange={onChange} defaultValue="sort">
          <option disabled value="sort">
            Sort
          </option>
          <option value="amount">Amount</option>
          <option value="paymentType">Payment</option>
          <option value="date">Date</option>
          <option value="paymentMethod">Payment Method</option>
          <option value="currency">Currency</option>
        </SSelect>
      </SSelectWrapper>
      {sorted?.map(({ date, amount, currency, paymentMethod, location }) => (
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
