import React, { useContext } from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/IconImg/Icon';
import Typography from '../../atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';
import { TransactionContext } from '../../../contexts/contextTransaction';
import theme from '../../../style/theme/theme';
import getTransactionStyle from '../../../helpers/getTransactionStyle';
import getFormtDate from '../../../helpers/getFormtDate';
import { CurrencyContext } from '../../../contexts/currencyContext';

const { breakpoints } = theme;
const Container = styled.div`
  width: 87%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 18%;
    height: 17%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 26px;
`;
const TimenpPymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitelWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const MoneyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;
const TransactionListWrapper = styled.div`
  display: flex;
  padding-top: 23px;
  align-items: end;
  padding-top: 23px;
`;

const PaymentHistory: React.FC = () => {
  const { transactions } = useContext(TransactionContext);
  const { currencyRate, selectedCurrency } = useContext(CurrencyContext);

  return (
    <Container>
      <TitelWrapper>
        <Typography size={SelectSize.md}>Paymnet History</Typography>
      </TitelWrapper>
      {transactions?.map(({ date, amount, currency, paymentMethod }) => {
        const { icon, text, color, backgroundColor } = getTransactionStyle(paymentMethod);
        const currencyRates = amount / currencyRate[currency];
        return (
          <TransactionListWrapper>
            <IconWrapper>
              <Icon width="100%" height="100%" icon={icon} backgroundColor={backgroundColor} />
            </IconWrapper>
            <TimenpPymentWrapper>
              <Typography size={SelectSize.xl}>{text}</Typography>
              <Typography size={SelectSize.xs}>{getFormtDate(date)}</Typography>
            </TimenpPymentWrapper>
            <MoneyWrapper>
              <Typography size={SelectSize.sm} color={color}>
                {currencyRates.toFixed(2)}
              </Typography>
              <Typography size={SelectSize.xs}>{selectedCurrency}</Typography>
            </MoneyWrapper>
          </TransactionListWrapper>
        );
      })}
    </Container>
  );
};

export default PaymentHistory;
