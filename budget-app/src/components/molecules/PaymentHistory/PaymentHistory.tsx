import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/IconImg/Icon';
import Typography from '../../atoms/Typography/Typography';
import { Selects } from '../../../containers/enums/index';
import { IPaymentHistoryProps } from '../../../models/index';

const Container = styled.div`
  display: grid;
  width: 45vw;
  opacity: 0.6;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  /* grid-row-gap: 24px */
`;
const IconWrapper = styled.div`
  grid-row: 2/4;
`;
const TimenWrapper = styled.div`
  padding-top: 2px;
`;
const TitelWrapper = styled.div`
  grid-column: 1/4;
  padding-left: 45px;
`;
const SWrapper = styled.div`
  padding-top: 20px;
`;
const MoneyWrapper = styled.div`
  padding-left: 24px;
  padding-top: 23px;
`;
const PaymentHistory: React.FC<IPaymentHistoryProps> = ({ money, moneyTransactions, date, hour, titel, icon }) => (
  <Container>
    <TitelWrapper>
      <Typography size={Selects.lg}>{titel}</Typography>
    </TitelWrapper>
    <IconWrapper>
      <Icon width="5vw" height="5vh" src={icon}>
        {' '}
      </Icon>
    </IconWrapper>
    <SWrapper>
      <Typography size={Selects.sm}>{moneyTransactions}</Typography>
    </SWrapper>
    <MoneyWrapper>
      <Typography size={Selects.sm}>{money}</Typography>
    </MoneyWrapper>
    <TimenWrapper>
      <Typography size={Selects.sm}>
        {date}
        {hour}
      </Typography>
    </TimenWrapper>
  </Container>
);

export default PaymentHistory;
