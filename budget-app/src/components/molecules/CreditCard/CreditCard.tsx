import React from 'react';
import styled from 'styled-components';
import { ICardProps } from '../../../models/index';
import Typography from '../../atoms/Typography/Typography';
import { Selects } from '../../../containers/enums/index';
import img from '../../../assets/images/Backgrund.jpg';

const Container = styled.div<ICardProps>`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media (max-width: 768px) {
    width: 38vw;
    height: 27vh;
  }
`;
const FullaNmeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 19vh;
`;
const DateWrapper = styled.div`
  display: flex;
  justify-self: right;
  flex-direction: column;
`;
const CardNumWerapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CreditCard: React.FC<ICardProps> = ({ height, width, last4Digits, FirstName, LastName, year, month }) => (
  <Container height={height} width={width}>
    <Typography size={Selects.lg} color="white">
      Card
    </Typography>
    <CardNumWerapper>
      <Typography size={Selects.md} color="white">
        **** **** ****
        {last4Digits}
      </Typography>
    </CardNumWerapper>
    <FullaNmeWrapper>
      <Typography size={Selects.xs} color="#bdbfbf">
        CARD HOLDER
      </Typography>

      <Typography size={Selects.sm} color="white">
        {FirstName}
        -
        {LastName}
      </Typography>
    </FullaNmeWrapper>
    <DateWrapper>
      <Typography size={Selects.xs} color="#bdbfbf">
        VALID THRU
      </Typography>

      <Typography size={Selects.sm} color="white">
        {month}
        /
        {year}
      </Typography>
    </DateWrapper>
  </Container>
);

export default CreditCard;
