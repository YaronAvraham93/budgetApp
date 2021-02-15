import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/IconImg/Icon';
import Typography from '../../atoms/Typography/Typography';
import { Selects } from '../../../containers/enums/index';
import { INavbarItem } from '../../../models/index';

const SWrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;
const SidebarNavItem: React.FC<INavbarItem> = ({ text, icon }) => (
  <SWrapper>
    <Icon width="15vw" height="15vh" src={icon} />
    <Typography size={Selects.sm}>{text}</Typography>
  </SWrapper>
);

export default SidebarNavItem;
