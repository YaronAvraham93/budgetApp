import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IIconProps } from '../../../models/index';

const STIcon = styled.div<IIconProps>`
  ${({ width }) => `width:${width}`};
  ${({ height }) => `height:${height}`};
  ${({ backgroundColor }) => `background-color:${backgroundColor}`};
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Icon: React.FC<IIconProps> = ({ icon, width, height, color, backgroundColor }) => (
  <STIcon width={width} height={height} backgroundColor={backgroundColor}>
    <FontAwesomeIcon icon={icon} color={color} />
  </STIcon>
);

export default Icon;
