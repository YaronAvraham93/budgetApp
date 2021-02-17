import React from 'react';
import styled from 'styled-components';
import UserProfile from '../../molecules/UserProfile/UserProfile';
import PaymentHistory from '../../molecules/PaymentHistory/PaymentHistory';
import { IUserInfroProps } from '../../../models/index';
import List from './List';

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
  overflow-y: overlay;
`;
const UserInfro: React.FC<IUserInfroProps> = ({ height, width, firstName, lastName, emil, img }) => (
  <Container height={height} width={width}>
    <UserWrapper>
      <UserProfile width="15vw" height="24vh" img={img} firstName={firstName} lastName={lastName} emil={emil} />
    </UserWrapper>
    <PaymentUI>
      {List.map((item) => (
        <PaymentHistory
          width="26vw"
          icon={item.icon}
          titel={item.titel}
          hour={item.hour}
          date={item.date}
          moneyTransactions={item.moneyTransactions}
          money={item.money}
        />
      ))}
    </PaymentUI>
  </Container>
);

export default UserInfro;
