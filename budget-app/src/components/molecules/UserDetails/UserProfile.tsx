import React from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';
import { IUserProfile } from '../../../models/index';
import Avatar from '../../atoms/Avatar/Avatar';
import theme from '../../../style/theme/theme';

const { colors } = theme;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.orange.lightOrange};
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  @media (max-width: 768px) {
    width: 20%;
    height: 10%;
    display: flex;
    flex-direction: column;
  }
`;

const UserProfile: React.FC<IUserProfile> = ({ avatarSrc, email, firstName, lastName }) => (
  <Container>
    <Avatar src={avatarSrc} />
    <Typography size={SelectSize.sm}>
      {firstName}
      -
      {lastName}
    </Typography>
    <Typography size={SelectSize.xs} color={colors.gray.lightGray}>
      {email}
    </Typography>
  </Container>
);

export default UserProfile;
