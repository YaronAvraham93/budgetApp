import React from 'react';
import styled from 'styled-components';
import { IPagination } from '../../../models';

const SNav = styled.nav``;
const SUl = styled.ul`
  list-style-type: none;
  display: inline-flex;
`;
const SLi = styled.li`
  padding-left: 15px;
`;
const SLink = styled.button``;
const Pagination: React.FC<IPagination> = ({ transactionsPerPage, totalTransactions, paginate }) => {
  const perNumbers = [];
  const paginationNumber = totalTransactions / transactionsPerPage;
  for (let i = 1; i <= paginationNumber; i += 1) {
    perNumbers.push(i);
  }
  console.log('paginationNumber   ', paginationNumber);
  return (
    <SNav>
      <SUl>
        {perNumbers.map((number) => (
          <SLi key={number}>
            <SLink onClick={() => paginate(number)} type="button">
              {number}
            </SLink>
          </SLi>
        ))}
      </SUl>
    </SNav>
  );
};

export default Pagination;
