import React from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';
import { IUserrofileProps } from '../../../models/index';
import Avatar from '../../atoms/Avatar/Avatar';

const Container = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  background-color:${theme.colors.lightorange};
  border-radius: 1rem;
  margin-bottom: 5px;
  height: 22vh;
  width: 12vw;
  @media (max-width: 768px) {
    width: 20vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
  }
`
);

const UserProfile: React.FC<IUserrofileProps> = ({ avatarSrc, email, firstName, lastName }) => (
  <Container>
    <Avatar src={avatarSrc} />
    <Typography size={SelectSize.sm}>
      {firstName}
      {lastName}
    </Typography>
    <Typography size={SelectSize.xs} color="#bdbfbf">
      {email}
    </Typography>
  </Container>
);

export default UserProfile;
