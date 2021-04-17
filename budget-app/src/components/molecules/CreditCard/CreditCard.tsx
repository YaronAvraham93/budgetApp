import React from 'react';
import styled from 'styled-components';
import { ICreditCardProps } from '../../../models/index';
import Typography from '../../atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';
import img from '../../../assets/images/Backgrund.jpg';

const Container = styled.div(
  ({ theme }) => `
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(149, 157, 165, 55) 0px 8px 24px;
  height: 29vh;
  width: 23vw;
  display: block;

  @media (max-width: ${theme.breakpoints.tablet}) {
  width: 55vw;
    height: 30vh;
  }
`
);
const FullNameDateWrapper = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  width: 48vh;
  justify-content: space-between;
  height: 4vh;
  align-items: center;
  @media (max-width: ${theme.breakpoints.tablet}) {
  width:45vw;
    height: 9vh;
  }
  
`
);
const DateWrapper = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 0vh;
    width: 0vw;
    }
`
);
const CardNumWerapper = styled.div(
  ({ theme }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 17vh;
  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 12vh;
    display: block;
    }
`
);
const TitelWrapper = styled.div`
  display: block;
`;
const FullNameWrapper = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 12vh;
    width: 14vw;
    }
`
);

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
        <Typography size={SelectSize.xs} color="#bdbfbf">
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
