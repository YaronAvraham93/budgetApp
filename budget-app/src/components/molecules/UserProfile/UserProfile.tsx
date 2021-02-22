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
  margin-bottom: 5px;
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
  @media (max-width: 768px) {
    width: 20vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
  }
`;

const UserProfile: React.FC<IUserrofileProps> = ({ width, height, img, emil, firstName, lastName }) => (
  <SWrapper height={height} width={width}>
    <Avatar height="15vh" width="7vw" src={img} size={Selects.lg}>
      {' '}
    </Avatar>
    <Typography size={Selects.sm}>
      {firstName}
      {lastName}
    </Typography>
    <Typography size={Selects.xs} color="#bdbfbf">
      {emil}
    </Typography>
  </SWrapper>
);

export default UserProfile;
