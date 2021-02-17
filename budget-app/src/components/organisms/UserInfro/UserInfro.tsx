import React from 'react';
import styled from 'styled-components';
import UserProfile from '../../molecules/UserProfile/UserProfile';
import PaymentHistory from '../../molecules/PaymentHistory/PaymentHistory';
import { IUserInfroProps } from '../../../models/index';

const Container = styled.div<IUserInfroProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcedd8;
  border-radius: 1rem;
  margin-left: 25px;
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
`;
const UserWrapper = styled.div`
  padding-top: 50px;
`;
const PaymentUI = styled.div`
  padding-top: 15px;
`;
const UserInfro: React.FC<IUserInfroProps> = ({
  height,
  width,
  firstName,
  lastName,
  emil,
  img,
  icon,
  titel,
  hour,
  date,
  money,
  moneyTransactions,
}) => (
  <Container height={height} width={width}>
    <UserWrapper>
      <UserProfile width="15vw" height="24vh" img={img} firstName={firstName} lastName={lastName} emil={emil} />
    </UserWrapper>
    <PaymentUI>
      <PaymentHistory
        width="26vw"
        icon={icon}
        titel={titel}
        hour={hour}
        date={date}
        moneyTransactions={moneyTransactions}
        money={money}
      />
    </PaymentUI>
  </Container>
);

export default UserInfro;
