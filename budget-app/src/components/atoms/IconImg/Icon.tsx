import React from 'react';
import styled from 'styled-components';
import { IIconProps } from '../../../models/index';

const STIcon = styled.img<IIconProps>`
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
`;

const Icon: React.FC<IIconProps> = ({ width, height, src }) => <STIcon src={src} width={width} height={height} />;

export default Icon;
