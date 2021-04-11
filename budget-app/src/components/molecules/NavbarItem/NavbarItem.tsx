import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/IconImg/Icon';
import Typography from '../../atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';
import { INavbarItem } from '../../../models/index';
import theme from '../../../style/theme/theme';

const Container = styled.li<INavbarItem>(
  () => `
  color:floralwhite;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8vh;
  width: 12vw;
  &:hover {
    opacity: 1;
    color: lightgray;
  }
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`
);

const NavbarItem: React.FC<INavbarItem> = ({ title, icon, route }) => (
  <Container route={route}>
    <Icon icon={icon} color="white" />
    <Typography size={SelectSize.sm}>{title}</Typography>
  </Container>
);

export default NavbarItem;
