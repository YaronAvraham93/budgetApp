import React, { useContext } from 'react';
import styled from 'styled-components';
import UserProfile from '../../molecules/UserProfile/UserProfile';
import PaymentHistory from '../../molecules/PaymentHistory/PaymentHistory';
import theme from '../../../style/theme/theme';
import { UserContext } from '../../../contexts/userContext';

const Container = styled.div(
  () => `
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.lightOrange};
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

const UserInfro: React.FC = () => {
  const { user } = useContext(UserContext);
  return (
    <Container>
      <UserWrapper>
        <UserProfile avatarSrc={user.avatar} firstName={user.firstName} lastName={user.lastName} email={user.email} />
      </UserWrapper>
      <PaymentListWrapper>
        <PaymentHistory />
      </PaymentListWrapper>
    </Container>
  );
};

export default UserInfro;
