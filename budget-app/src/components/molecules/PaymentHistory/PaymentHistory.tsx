import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/IconImg/Icon';
import Typography from '../../atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';
import { IPaymentHistoryProps } from '../../../models/index';
import theme from '../../../style/theme/theme';

const Container = styled.div<IPaymentHistoryProps>(
  () => `

  width: 16vw;
  opacity: 0.6;
  border-radius: 25px;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 18vw;
    height: 17vh;
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
interface ItransactionProps {
  transactions?: [];
}
const getFormtDate = (date: string) => new Date(date).toLocaleString();

const PaymentHistory: React.FC<ItransactionProps> = ({ transactions }) => (
  <Container>
    <TitelWrapper>
      <Typography size={SelectSize.md}>Paymnet History</Typography>
    </TitelWrapper>
    {transactions?.map((transaction: IPaymentHistoryProps) => (
      <TransactionListWrapper>
        <IconWrapper>
          <Icon width="3vw" height="3vh" />
        </IconWrapper>
        <TimenpPymentWrapper>
          <Typography size={SelectSize.xl}>{transaction.paymentMethod}</Typography>
          <Typography size={SelectSize.xs} color="#d1c0ae">
            {transaction.date ? getFormtDate(transaction.date) : ''}
          </Typography>
        </TimenpPymentWrapper>
        <MoneyWrapper>
          <Typography size={SelectSize.sm}>{transaction.amount}</Typography>
          <Typography size={SelectSize.xs}>USD</Typography>
        </MoneyWrapper>
      </TransactionListWrapper>
    ))}
  </Container>
);

export default PaymentHistory;
