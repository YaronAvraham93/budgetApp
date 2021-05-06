import React, { useContext } from 'react';
import styled from 'styled-components';
import Avatar from '../../../components/atoms/Avatar/Avatar';
import Typography from '../../../components/atoms/Typography/Typography';
import CreaditCard from '../../../components/molecules/CreditCard/CreditCard';
import SelectSize from '../../../containers/enums';
import { UserContext } from '../../../contexts/userContext';
import theme from '../../../style/theme/theme';

const { breakpoints } = theme;
const Container = styled.div`
  display: flex;
  height: 34%;
  width: 94%;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  @media (max-width: ${breakpoints.tablet}) {
    width: 20%;
    height: 10%;
    display: flex;
    flex-direction: column;
  }
`;
const SAvater = styled.div`
  height: 35%;
  width: 62%;
`;
const CreaditCardWapper = styled.div`
  height: 20%;
  width: 100%;
`;
const CurrentBalancedWapper = styled.div`
  height: 15%;
  width: 34%;
`;
// const CurrentBalancedCreadit = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: flex-end;
// `;
const FirstLastNameWapper = styled.div`
  width: 30%;
`;
const TextWapper = styled.p`
  font-family: fantasy;
`;

const UserProfile: React.FC = () => {
  const { user } = useContext(UserContext);
  const { avatar, firstName, lastName, email, currentBalance, creditCard } = user;
  return (
    <Container>
      <SAvater>
        <Avatar src={avatar} />
      </SAvater>
      <FirstLastNameWapper>
        <Typography size={SelectSize.sm}>
          <TextWapper> First name: </TextWapper>
          {firstName}
        </Typography>
        <Typography size={SelectSize.sm}>
          <TextWapper> Last name: </TextWapper>
          {lastName}
        </Typography>
        <Typography size={SelectSize.sm}>
          <TextWapper> Email: </TextWapper>
          {email}
        </Typography>
      </FirstLastNameWapper>
      <CurrentBalancedWapper>
        <Typography size={SelectSize.md}>
          <TextWapper> Bank account balance: </TextWapper>
          {currentBalance}
        </Typography>
      </CurrentBalancedWapper>

      <CreaditCardWapper>
        <CreaditCard
          last4Digits={creditCard[0].last4Digits}
          firstName={firstName}
          lastName={lastName}
          month={creditCard[0].expMonth}
          year={creditCard[0].expYear}
        />
      </CreaditCardWapper>
    </Container>
  );
};

export default UserProfile;
