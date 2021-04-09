import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IIconProps } from '../../../models/index';

const STIcon = styled.div<IIconProps>`
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
`;

const Icon: React.FC<IIconProps> = ({ icon, width, height, color }) => (
  <STIcon width={width} height={height}>
    <FontAwesomeIcon icon={icon} color={color} />
  </STIcon>
);

export default Icon;
