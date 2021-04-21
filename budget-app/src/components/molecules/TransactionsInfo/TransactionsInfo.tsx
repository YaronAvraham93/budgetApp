import React from 'react';
import styled from 'styled-components';
import { ITransactionInfo } from '../../../models/index';
import Typography from '../../atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';

const SWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 40vh;
`;
const SAmountPaymentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-end;
  height: 6vh;
`;
const SAmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const SPaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const SCityCountryWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  height: 8vh;
`;
const SDateCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;
`;

const SInfoWrapper = styled.div`
  width: 13rem;
  height: 8rem;
  box-shadow: 0px 3px 15px rgb(0 0 0 / 20%);
  padding: 1.5rem 2rem;
  border-radius: 1rem;

  @media only screen and (max-width: 37.5em) {
    height: 7rem;
  }
`;

const TransactionsInfo: React.FC<ITransactionInfo> = ({
  date,
  paymentType,
  amount,
  currency,
  category,
  country,
  city,
}) => (
  <SWrapper>
    <SInfoWrapper>
      <SDateCategoryWrapper>
        <Typography size={SelectSize.md}>{category}</Typography>
        <Typography size={SelectSize.md}>{date}</Typography>
      </SDateCategoryWrapper>
      <SCityCountryWrapper>
        <Typography size={SelectSize.sm} color="#585454">
          Location:
        </Typography>
        <Typography size={SelectSize.sm}>{country}</Typography>
        <Typography size={SelectSize.sm}>{city}</Typography>
      </SCityCountryWrapper>
      <SAmountPaymentWrapper>
        <SAmountWrapper>
          <Typography size={SelectSize.sm} color="#585454">
            Amount
          </Typography>
          <Typography size={SelectSize.sm} font-family="fantasy">
            {amount}
            {currency}
          </Typography>
        </SAmountWrapper>
        <SPaymentWrapper>
          <Typography size={SelectSize.xl} color="#585454">
            Transaction
          </Typography>
          <Typography size={SelectSize.sm} font-family="fantasy">
            {paymentType}
          </Typography>
        </SPaymentWrapper>
      </SAmountPaymentWrapper>
    </SInfoWrapper>
  </SWrapper>
);

export default TransactionsInfo;
