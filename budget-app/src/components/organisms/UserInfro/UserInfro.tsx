import React from 'react';
import styled from 'styled-components';
import UserProfile from '../../molecules/UserProfile/UserProfile';
import PaymentHistory from '../../molecules/PaymentHistory/PaymentHistory';
import ListPayment from '../../../constants/PaymentList';

const Container = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcedd8;
  border-radius: 1rem;
  margin-left: 25px;
  height: 140vh;
  width: 15vw;
  @media (max-width:  ${theme.breakpoints.tablet}) {
    width: 20vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`
);
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
      {ListPayment.map(({ icon, title, hour, date, moneyTransactions, money }) => (
        <PaymentHistory
          icon={icon}
          title={title}
          hour={hour}
          date={date}
          moneyTransactions={moneyTransactions}
          money={money}
        />
      ))}
    </PaymentListWrapper>
  </Container>
);

export default UserInfro;
