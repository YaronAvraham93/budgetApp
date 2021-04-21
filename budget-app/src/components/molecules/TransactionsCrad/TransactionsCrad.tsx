import React from 'react';
import styled from 'styled-components';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../atoms/IconImg/Icon';
import { ITransactionInfo } from '../../../models/index';
import Typography from '../../atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';
import theme from '../../../style/theme/theme';

const { colors } = theme;
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

const TransactionsCrad: React.FC<ITransactionInfo> = ({ date, paymentType, amount, currency, country, city }) => (
  <SWrapper>
    <SInfoWrapper>
      <SDateCategoryWrapper>
        <Icon icon={faCalculator} />
        <Typography size={SelectSize.xl}>{date}</Typography>
      </SDateCategoryWrapper>
      <SCityCountryWrapper>
        {/* <Typography size={SelectSize.sm} color={colors.gray.mediumGray}>
          Location:
        </Typography> */}
        <Typography size={SelectSize.sm}>
          Location:
          {country}
        </Typography>
        <Typography size={SelectSize.sm}>{city}</Typography>
      </SCityCountryWrapper>
      <SAmountPaymentWrapper>
        <SAmountWrapper>
          <Typography size={SelectSize.sm} color={colors.gray.lightGray}>
            Amount
          </Typography>
          <Typography size={SelectSize.sm}>
            {amount}
            -
            {currency}
          </Typography>
        </SAmountWrapper>
        <SPaymentWrapper>
          <Typography size={SelectSize.xl} color={colors.gray.lightGray}>
            Transaction
          </Typography>
          <Typography size={SelectSize.sm}>{paymentType}</Typography>
        </SPaymentWrapper>
      </SAmountPaymentWrapper>
    </SInfoWrapper>
  </SWrapper>
);

export default TransactionsCrad;
