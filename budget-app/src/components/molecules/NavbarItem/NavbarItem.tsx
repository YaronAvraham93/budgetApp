import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/IconImg/Icon';
import Typography from '../../atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';
import { INavbarItem } from '../../../models/index';
import theme from '../../../style/theme/theme';

const Container = styled.div<INavbarItem>(
  () => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.6;
  height: 8vh;
  width: 12vw;
  &:hover {
    opacity: 1;
    color: wheat;
  }
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`
);

const NavbarItem: React.FC<INavbarItem> = ({ title, icon, route }) => (
  <Container route={route}>
    <Icon width="3vw" height="3vh" icon={icon} color="white" />
    <Typography size={SelectSize.sm}>{title}</Typography>
  </Container>
);

export default NavbarItem;
