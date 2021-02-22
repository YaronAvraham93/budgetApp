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
  box-shadow: rgba(149, 157, 165, 55) 0px 8px 24px;
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
  display: block;

  @media (max-width: 768px) {
    width: 38vw;
    height: 27vh;
  }
`;
const Wrapper = styled.div`
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
const Titel = styled.div`
  display: block;
`;
const FullName = styled.div`
  display: flex;
  flex-direction: column;
`;

const CreditCard: React.FC<ICardProps> = ({ height, width, last4Digits, FirstName, LastName, year, month }) => (
  <Container height={height} width={width}>
    <Titel>
      <Typography size={Selects.lg} color="white">
        Card
      </Typography>
    </Titel>
    <CardNumWerapper>
      <Typography size={Selects.md} color="white">
        **** **** ****
        {last4Digits}
      </Typography>
    </CardNumWerapper>
    <Wrapper>
      <FullName>
        <Typography size={Selects.xs} color="#bdbfbf">
          CARD HOLDER
        </Typography>

        <Typography size={Selects.sm} color="white">
          {FirstName}
          -
          {LastName}
        </Typography>
      </FullName>
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
    </Wrapper>
  </Container>
);

export default CreditCard;
