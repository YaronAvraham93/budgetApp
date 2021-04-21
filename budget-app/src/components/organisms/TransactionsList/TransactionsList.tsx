import React from 'react';
import styled from 'styled-components';
import TransactionsInfo from '../../molecules/TransactionsInfo/TransactionsInfo';

const SWrapper = styled.div``;

const TransactionsList: React.FC = () => (
  <SWrapper>
    <TransactionsInfo
      date="07/21"
      paymentType="income"
      amount={2000}
      currency="Doller"
      category="shop"
      country="Israel"
      city="kafar saba"
    />
  </SWrapper>
);

export default TransactionsList;
