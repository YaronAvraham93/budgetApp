import React from 'react';
import styled from 'styled-components';
import { IAvatarProps } from '../../../models/index';

const setImage = (src: any) => `
      background-size: cover;
      background-image: url('${src}')
      `;

const SAvatar = styled.div<IAvatarProps>`
  border-radius: 50px;
  ${(props) => setImage(props.src)};
  height: 15vh;
  width: 7vw;
`;

const Avatar: React.FC<IAvatarProps> = ({ src }) => <SAvatar src={src} />;
export default Avatar;
