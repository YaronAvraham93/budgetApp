import React from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import { Selects } from '../../../containers/enums/index';
import { IUserrofileProps } from '../../../models/index';
import Avatar from '../../atoms/Avatar/Avatar';

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  background-color: #f0e5c6;
  border-radius: 1rem;
  height: 26vh;
  width: 26vw;
`;

const UserProfile: React.FC<IUserrofileProps> = ({ img, emil, firstName, lastName }) => (
  <SWrapper>
    <Avatar height="8vh" width="8vw" src={img} size={Selects.lg}>
      {' '}
    </Avatar>
    <Typography size={Selects.md}>
      {firstName}
      {lastName}
    </Typography>
    <Typography size={Selects.sm} color="#bdbfbf">
      {emil}
    </Typography>
  </SWrapper>
);

export default UserProfile;
