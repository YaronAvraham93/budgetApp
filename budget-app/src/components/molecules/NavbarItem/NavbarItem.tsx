import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/IconImg/Icon';
import Typography from '../../atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';
import { INavbarItem } from '../../../models/index';
import theme from '../../../style/theme/theme';

const { breakpoints } = theme;
const Container = styled.li`
  color: floralwhite;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8%;
  width: 12%;
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: lightgray;
  }
  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

const NavbarItem: React.FC<INavbarItem> = ({ title, icon }) => (
  <Container>
    <Icon icon={icon} color="white" />
    <Typography size={SelectSize.sm}>{title}</Typography>
  </Container>
);

export default NavbarItem;
