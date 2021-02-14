import React from 'react';
import styled from 'styled-components';
import { Selects } from '../../../containers/enums/index';
import { IAvatarProps } from '../../../models/index';

const getSize = (size?: Selects) => {
  switch (size) {
    case Selects.sm:
      return `  border: 2px solid red;
      padding: 10px;
      border-radius: 50px 40px; `;
    case Selects.md:
      return `  border: 2px solid black
          clip-path: circle(50% at 50% 50%)`;
    case Selects.lg:
      return ` border: 2px solid black;
      padding: 5px;
      border-radius: 25px;
       `;
    default:
      return ` border: 2px solid black;
      padding: 5px;
      border-radius: 25px`;
  }
};
const setImage = (src: any) => `
      background-size: cover;
      background-image: url('${src}')
      `;

const SAvatar = styled.div<IAvatarProps>`
  ${(props) => getSize(props.size)};
  ${(props) => setImage(props.src)};
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
`;

const Avatar: React.FC<IAvatarProps> = ({ size = Selects.md, src, height, width }) => (
  <SAvatar size={size} src={src} width={width} height={height} />
);
export default Avatar;
