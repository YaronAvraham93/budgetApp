import React from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import { Selects } from '../../../containers/enums/index';
import { IUserrofileProps } from '../../../models/index';
import Avatar from '../../atoms/Avatar/Avatar';

const SWrapper = styled.div<IUserrofileProps>`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  background-color: #fdf3e7;
  border-radius: 1rem;
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
`;

const UserProfile: React.FC<IUserrofileProps> = ({ width, height, img, emil, firstName, lastName }) => (
  <SWrapper height={height} width={width}>
    <Avatar height="8vh" width="8vw" src={img} size={Selects.lg}>
      {' '}
    </Avatar>
    <Typography size={Selects.md}>
      {firstName}
      {lastName}
    </Typography>
    <Typography size={Selects.xs} color="#bdbfbf">
      {emil}
    </Typography>
  </SWrapper>
);

export default UserProfile;
