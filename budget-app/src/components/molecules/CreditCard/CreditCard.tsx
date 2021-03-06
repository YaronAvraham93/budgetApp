import React from 'react';
import styled from 'styled-components';
import { ICreditCardProps } from '../../../models/index';
import Typography from '../../atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';
import img from '../../../assets/images/Backgrund.jpg';

const Container = styled.div<ICreditCardProps>(
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
    width: 38vw;
    height: 27vh;
    flex-direction: column;
  }
`
);
const FullNameDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 48vh;
  justify-content: space-between;
  height: 4vh;
  align-items: center;
`;
const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardNumWerapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 17vh;
`;
const TitelWrapper = styled.div`
  display: block;
`;
const FullNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
