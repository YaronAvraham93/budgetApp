import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TransactionContext } from '../../../contexts/contextTransaction';
import filterRange from '../../../helpers/filterRange';

const Container = styled.div``;
const AmountInput: React.FC = () => {
  const { transactions, setTransactions } = useContext(TransactionContext);
  const [rangeStart, setRangeStart] = useState(0);
  const [rangeEnd, setRangeEnd] = useState(0);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRangeStart(+value);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRangeEnd(+value);
  };
  const onClick = () => {
    const filterTransactions = filterRange(transactions, rangeStart, rangeEnd);
    setTransactions(filterTransactions);
  };
  return (
    <Container>
      <input onChange={onChangeHandler} />
      <input onChange={onChange} />
      <button onClick={onClick} type="button">
        click
      </button>
    </Container>
  );
};
export default AmountInput;
