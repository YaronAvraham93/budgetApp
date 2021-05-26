import React, { useContext } from 'react';
import styled from 'styled-components';
import UserDetails from '../../molecules/UserDetails/UserDetails';
import PaymentHistory from '../PaymentHistory/PaymentHistory';
import theme from '../../../style/theme/theme';
import { UserContext } from '../../../contexts/userContext';

const { colors, breakpoints } = theme;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.orange.mediumOrange};
  border-radius: 1rem;
  margin-left: 25px;
  height: 34%;
  margin: 0;
  width: 100%;
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const UserWrapper = styled.div`
  background-color: ${colors.orange.lightOrange};
  border-radius: 1rem;
  height: 65%;
  width: 80%;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const PaymentListWrapper = styled.div`
  padding-top: 15px;
  overflow-y: overlay;
`;

const UserInfo: React.FC = () => {
  const { user } = useContext(UserContext);
  const { avatar, firstName, lastName, email } = user;
  return (
    <Container>
      <UserWrapper>
        <UserDetails avatarSrc={avatar} firstName={firstName} lastName={lastName} email={email} />
      </UserWrapper>
      <PaymentListWrapper>
        <PaymentHistory />
      </PaymentListWrapper>
    </Container>
  );
};

export default UserInfo;
