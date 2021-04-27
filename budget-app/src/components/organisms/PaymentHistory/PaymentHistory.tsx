import React, { useContext } from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/IconImg/Icon';
import Typography from '../../atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';
import { TransactionContext } from '../../../contexts/contextTransaction';
import theme from '../../../style/theme/theme';
import getTransactionStyle from '../../../helpers/getTransactionStyle';
import getFormtDate from '../../../helpers/getFormtDate';

const Container = styled.div(
  () => `
  width: 50%;
  opacity: 0.6;
  border-radius: 25px;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 18%;
    height: 17%;
  }
`
);
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  return (
    <Container>
      <TitelWrapper>
        <Typography size={SelectSize.md}>Paymnet History</Typography>
      </TitelWrapper>
      {transactions?.map(({ date, amount, currency, paymentMethod }) => {
        const { icon, text, color, backgroundColor } = getTransactionStyle(paymentMethod);
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
                {amount}
              </Typography>
              <Typography size={SelectSize.xs}>{currency}</Typography>
            </MoneyWrapper>
          </TransactionListWrapper>
        );
      })}
    </Container>
  );
};

export default PaymentHistory;
