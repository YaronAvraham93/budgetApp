import React from 'react';
import styled from 'styled-components';
import { ICreditCardProps } from '../../../models/index';
import Typography from '../../atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';
import img from '../../../assets/images/Backgrund.jpg';
import theme from '../../../style/theme/theme';

const Container = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(149, 157, 165, 70) 0px 8px 24px;
  height: 70%;
  width: 33%;
  display: block;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 91%;
    height: 40%;
  }
`;

const FullNameDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  height: 15%;
  align-items: center;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: flex-end;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 20%;
  }
`;

const CardNumWerapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 33%;
    display: block;
    padding-left: 60px;
  }
`;

const TitelWrapper = styled.div`
  display: block;
  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 40%;
  }
`;
const FullNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
`;

const CreditCard: React.FC<ICreditCardProps> = ({ last4Digits, firstName, lastName, year, month }) => (
  <Container>
    <TitelWrapper>
      <Typography size={SelectSize.lg} color="white">
        Card
      </Typography>
    </TitelWrapper>
    <CardNumWerapper>
      <Typography size={SelectSize.md} color="white">
        **** **** ****
        {last4Digits}
      </Typography>
    </CardNumWerapper>
    <FullNameDateWrapper>
      <FullNameWrapper>
        <Typography size={SelectSize.xs} color="white">
          CARD HOLDER
        </Typography>
        <Typography size={SelectSize.sm} color="white">
          {firstName}
          -
          {lastName}
        </Typography>
      </FullNameWrapper>
      <DateWrapper>
        <Typography size={SelectSize.xs} color="#bdbfbf">
          VALID THRU
        </Typography>
        <Typography size={SelectSize.sm} color="white">
          {month}
          /
          {year}
        </Typography>
      </DateWrapper>
    </FullNameDateWrapper>
  </Container>
);

export default CreditCard;
