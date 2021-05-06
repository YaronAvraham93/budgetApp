import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import TransactionsList from '../../../components/organisms/TransactionsList/TransactionsList';
import { TransactionContext } from '../../../contexts/contextTransaction';
import sortBy from '../../../helpers/sortBy';
import filterRange from '../../../helpers/filterRange';
import Typography from '../../../components/atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';
import theme from '../../../style/theme/theme';
import Pagination from '../../../components/organisms/PaginationPages/Pagination';

const { colors, breakpoints } = theme;
const SSelect = styled.select``;
const SInput = styled.input`
  border: none;
  border-bottom: 2px solid ${colors.green.mediumGreen};
  width: 15%;
  :focus {
    border: 1px solid #555;
  }
  @media (max-width: ${breakpoints.tablet}) {
    height: 100%;
    width: 32%;
    display: block;
  }
`;
const SButton = styled.button`
  color: gray;
  transition-duration: 0.4s;
  cursor: pointer;
  :hover {
    background-color: ${colors.green.mediumGreen};
    color: white;
  }
  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 18px;
  }
`;
const SSelectWrapper = styled.div`
  display: flex;
  padding-right: 97px;
  @media (max-width: ${breakpoints.tablet}) {
    height: 100%;
    width: 100%;
    padding: 0;
  }
`;
const SWrapper = styled.div`
  height: 43%;
  width: 100%;
  @media (max-width: ${breakpoints.tablet}) {
    height: 100%;
    width: 100%;
  }
`;
const SInputWrapper = styled.div`
  padding-left: 42px;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: ${breakpoints.tablet}) {
    height: 100%;
    width: 100%;
    display: block;
  }
`;
const SInputSelect = styled.div`
  padding-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${breakpoints.tablet}) {
    height: 3%;
    width: 78%;
  }
`;

const Transactions: React.FC = () => {
  const { transactions } = useContext(TransactionContext);
  const [sorted, setSorted] = useState(transactions);
  const [rangeStart, setRangeStart] = useState(0);
  const [rangeEnd, setRangeEnd] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(6);
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
  const lestTransactionsIndex = currentPage * transactionsPerPage;
  const firstTransactionsIndex = lestTransactionsIndex - transactionsPerPage;
  const currentTransactions = sorted.slice(firstTransactionsIndex, lestTransactionsIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <SWrapper>
      <SInputSelect>
        <SInputWrapper>
          <Typography size={SelectSize.xl} color={colors.gray.lightGray}>
            Amount range:
          </Typography>
          <SInput placeholder="Start" onChange={inputOnHandlerStart} />
          <SInput placeholder="End" onChange={inputOnHandlerEnd} />
          <SButton onClick={onClick} type="button">
            Seach
          </SButton>
        </SInputWrapper>
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
      </SInputSelect>
      <TransactionsList arrTransactions={currentTransactions} />
      <Pagination transactionsPerPage={transactionsPerPage} totalTransactions={sorted.length} paginate={paginate} />
    </SWrapper>
  );
};

export default Transactions;
