import React from 'react';
import styled from 'styled-components';
import UserProfile from '../../molecules/UserProfile/UserProfile';
import PaymentHistory from '../../molecules/PaymentHistory/PaymentHistory';
import ListPayment from './PaymentList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcedd8;
  border-radius: 1rem;
  margin-left: 25px;
  height: 140vh;
  width: 15vw;
  @media (max-width: 768px) {
    width: 20vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
const UserWrapper = styled.div`
  padding-top: 50px;
`;
const PaymentListWrapper = styled.div`
  padding-top: 15px;
  overflow-y: overlay;
`;
const UserInfro: React.FC = () => (
  <Container>
    <UserWrapper>
      <UserProfile
        avatarSrc="http://www.weijiahong2018.com/static/assets/images/avatars/avatar.png"
        firstName="Yaron"
        lastName="Avraham"
        email="yaronavraham600@gmail.com"
      />
    </UserWrapper>
    <PaymentListWrapper>
      {ListPayment.map((item) => (
        <PaymentHistory
          icon={item.icon}
          title={item.titel}
          hour={item.hour}
          date={item.date}
          moneyTransactions={item.moneyTransactions}
          money={item.money}
        />
      ))}
    </PaymentListWrapper>
  </Container>
);

export default UserInfro;
