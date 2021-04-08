import React from 'react';
import styled from 'styled-components';
import UserProfile from '../../molecules/UserProfile/UserProfile';
import PaymentHistory from '../../molecules/PaymentHistory/PaymentHistory';
// import ListPayment from '../../../constants/PaymentList';

const Container = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.lightorange};
  border-radius: 1rem;
  margin-left: 25px;
  height: 140vh;
  width: 15vw;
  @media (max-width:  ${theme.breakpoints.tablet}) {
    
    display: none;
    
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

const UserInfro: React.FC<any> = ({ transactions }) => (
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
      <PaymentHistory transactions={transactions} />
    </PaymentListWrapper>
  </Container>
);

export default UserInfro;
