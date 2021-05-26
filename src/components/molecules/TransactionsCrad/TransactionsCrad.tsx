import React from 'react';
import styled from 'styled-components';
import { ITransactionInfo } from '../../../models/index';
import Typography from '../../atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';
import theme from '../../../style/theme/theme';

const { colors, breakpoints } = theme;
const SWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4%;
`;
const SAmountPaymentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-end;
  height: 12%;
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
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
  justify-content: space-between;
  flex-direction: row;
  height: 40%;
  @media (max-width: ${breakpoints.tablet}) {
    display: -webkit-box;
  }
`;
const SDateCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 25%;
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    display: block;
  }
`;
const SPaymentType = styled.div`
  height: 25%;
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    display: block;
  }
`;

const SInfoWrapper = styled.div`
  width: 13rem;
  height: 11rem;
  box-shadow: 0px 3px 15px rgb(0 0 0 / 20%);
  padding: 1.5rem 2rem;
  border-radius: 1rem;

  @media only screen and (max-width: 37.5em) {
    height: 10rem;
  }
`;

const TransactionsCrad: React.FC<ITransactionInfo> = ({
  date,
  paymentType,
  amount,
  currency,
  country,
  city,
  paymentMethod,
}) => (
  <SWrapper>
    <SInfoWrapper>
      <SPaymentType>
        <Typography size={SelectSize.md}>{paymentType}</Typography>
      </SPaymentType>
      <SDateCategoryWrapper>
        <Typography size={SelectSize.sm} color={colors.gray.lightGray}>
          Time&Date:
        </Typography>
        <Typography size={SelectSize.xl}>{date}</Typography>
      </SDateCategoryWrapper>
      <SCityCountryWrapper>
        <Typography size={SelectSize.sm} color={colors.gray.lightGray}>
          Location:
        </Typography>
        <Typography size={SelectSize.sm}>
          {country}
          -
          {city}
        </Typography>
      </SCityCountryWrapper>
      <SAmountPaymentWrapper>
        <SAmountWrapper>
          <Typography size={SelectSize.sm} color={colors.gray.lightGray}>
            Amount
          </Typography>
          <Typography size={SelectSize.sm}>
            {amount.toFixed(2)}
            -
            {currency}
          </Typography>
        </SAmountWrapper>
        <SPaymentWrapper>
          <Typography size={SelectSize.xl} color={colors.gray.lightGray}>
            Transaction
          </Typography>
          <Typography size={SelectSize.sm}>{paymentMethod}</Typography>
        </SPaymentWrapper>
      </SAmountPaymentWrapper>
    </SInfoWrapper>
  </SWrapper>
);

export default TransactionsCrad;
