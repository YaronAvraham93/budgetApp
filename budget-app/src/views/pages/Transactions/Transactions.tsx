import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import TransactionsList from '../../../components/organisms/TransactionsList/TransactionsList';
import { TransactionContext } from '../../../contexts/contextTransaction';
import sortBy from '../../../helpers/sortBy';
import filterRange from '../../../helpers/filterRange';
import Typography from '../../../components/atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';
import theme from '../../../style/theme/theme';

const SSelect = styled.select``;
const SInput = styled.input`
  border: none;
  border-bottom: 2px solid #4caf50;
  width: 15%;
  :focus {
    border: 1px solid #555;
  }
`;
const SButton = styled.button`
  color: gray;
  transition-duration: 0.4s;
  cursor: pointer;
  :hover {
    background-color: #4caf50;
    color: white;
  }
`;
const SSelectWrapper = styled.div`
  display: flex;
  padding-left: 40px;
`;
const SWrapper = styled.div`
  width: 61vw;
`;
const SInputWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;
const SInputSelect = styled.div`
  padding-top: 30px;
  width: 100%;
  display: flex;
`;

const Transactions: React.FC = () => {
  const { transactions } = useContext(TransactionContext);
  const [sorted, setSorted] = useState(transactions);
  const [rangeStart, setRangeStart] = useState(0);
  const [rangeEnd, setRangeEnd] = useState(0);
  const transactionsCopy = [...transactions];

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const sortedTransactions = sortBy(transactionsCopy, value);
    setSorted(sortedTransactions);
  };
  const inputOnHandlerStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRangeStart(+value);
  };
  const inputOnHandlerEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRangeEnd(+value);
  };
  const onClick = () => {
    const filterTransactions = filterRange(transactions, rangeStart, rangeEnd);
    setSorted(filterTransactions);
  };
  return (
    <SWrapper>
      <TransactionsList transactions={sorted} />
      <SInputSelect>
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
        <SInputWrapper>
          <Typography size={SelectSize.xl} color={theme.colors.gray.lightGray}>
            Amount range:
          </Typography>
          <SInput placeholder="Start" onChange={inputOnHandlerStart} />
          <SInput placeholder="End" onChange={inputOnHandlerEnd} />
          <SButton onClick={onClick} type="button">
            Seach
          </SButton>
        </SInputWrapper>
      </SInputSelect>
    </SWrapper>
  );
};

export default Transactions;
