import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IIcon } from '../../../models/index';

const STIcon = styled.div<IIcon>`
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
  ${(props) => `background-color:${props.backgroundColor}`};
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Icon: React.FC<IIcon> = ({ icon, width, height, color, backgroundColor }) => (
  <STIcon width={width} height={height} backgroundColor={backgroundColor}>
    <FontAwesomeIcon icon={icon} color={color} />
  </STIcon>
);

export default Icon;
