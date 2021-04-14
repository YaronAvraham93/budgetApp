import React from 'react';
import styled from 'styled-components';
import { IAvatar } from '../../../models/index';

const setImage = (src: any) => `
      background-size: cover;
      background-image: url('${src}')
      `;

const SAvatar = styled.div<IAvatar>`
  border-radius: 50px;
  ${(props) => setImage(props.src)};
  height: 15vh;
  width: 7vw;
`;

const Avatar: React.FC<IAvatar> = ({ src }) => <SAvatar src={src} />;
export default Avatar;
