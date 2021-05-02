import React from 'react';
import styled from 'styled-components';
import { IPagination } from '../../../models';
import theme from '../../../style/theme/theme';

const { breakpoints } = theme;
const SNav = styled.nav`
  padding-left: 15px;
  @media (max-width: ${breakpoints.tablet}) {
    height: 15%;
    display: flex;
    align-items: flex-end;
  }
`;
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

  for (let i = 1; i <= Math.ceil(totalTransactions / transactionsPerPage); i += 1) {
    perNumbers.push(i);
  }

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
