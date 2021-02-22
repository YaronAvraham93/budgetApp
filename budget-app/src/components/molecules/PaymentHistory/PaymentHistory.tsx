import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/IconImg/Icon';
import Typography from '../../atoms/Typography/Typography';
import { Selects } from '../../../containers/enums/index';
import { IPaymentHistoryProps } from '../../../models/index';

const Container = styled.div<IPaymentHistoryProps>`
  display: grid;
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
  opacity: 0.6;
  border-radius: 25px;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 768px) {
    width: 18vw;
    height: 17vh;
  }
`;
const IconWrapper = styled.div`
  grid-row: 2/4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TimenWrapper = styled.div`
  padding-top: 2px;
`;
const TitelWrapper = styled.div`
  grid-column: 1/4;
  display: flex;
  justify-content: center;
`;
const SWrapper = styled.div`
  padding-top: 20px;
`;
const MoneyWrapper = styled.div`
  padding-top: 23px;
`;
const PaymentHistory: React.FC<IPaymentHistoryProps> = ({
  height,
  width,
  money,
  moneyTransactions,
  date,
  hour,
  titel,
  icon,
}) => (
  <Container width={width} height={height}>
    <TitelWrapper>
      <Typography size={Selects.md}>{titel}</Typography>
    </TitelWrapper>
    <IconWrapper>
      <Icon width="3vw" height="3vh" src={icon}>
        {' '}
      </Icon>
    </IconWrapper>
    <SWrapper>
      <Typography size={Selects.xs}>{moneyTransactions}</Typography>
    </SWrapper>
    <MoneyWrapper>
      <Typography size={Selects.sm}>{money}</Typography>
    </MoneyWrapper>
    <TimenWrapper>
      <Typography size={Selects.xs} color="#d1c0ae">
        {date}
        {hour}
      </Typography>
    </TimenWrapper>
  </Container>
);

export default PaymentHistory;
