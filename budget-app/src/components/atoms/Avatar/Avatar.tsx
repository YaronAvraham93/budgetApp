import React from 'react';
import styled from 'styled-components';
import { IAvatarProps } from '../../../models/index';

type SAvatarBoxProps = Pick<IAvatarProps, 'src'>;
const setImage = (src: string) => `
      background-size: cover;
      background-image: url('${src}')
      `;

const SAvatar = styled.div<SAvatarBoxProps>`
  border-radius: 50px;
  ${({ src }) => setImage(src)};
  height: 54%;
  width: 50%;
  margin-bottom: 13px;
`;

const Avatar: React.FC<IAvatarProps> = ({ src }) => <SAvatar src={src} />;
export default Avatar;
