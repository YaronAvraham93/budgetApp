import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/IconImg/Icon';
import Typography from '../../atoms/Typography/Typography';
import { Selects } from '../../../containers/enums/index';
import { INavbarItem } from '../../../models/index';

const SWrapper = styled.div<INavbarItem>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.6;
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
  &:hover {
    opacity: 1;
    color: wheat;
  }
`;

const NavbarItem: React.FC<INavbarItem> = ({ width, height, text, icon }) => (
  <SWrapper height={height} width={width}>
    <Icon width="3vw" height="3vh" src={icon}>
      {' '}
    </Icon>
    <Typography size={Selects.sm}>{text}</Typography>
  </SWrapper>
);

export default NavbarItem;
