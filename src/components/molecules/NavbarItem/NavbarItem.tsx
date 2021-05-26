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
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: lightgray;
  }
  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;
const Sicon = styled.div`
  width: 0%;
`;

const NavbarItem: React.FC<INavbarItem> = ({ title, icon }) => (
  <Container>
    <Sicon>
      <Icon icon={icon} color="white" />
    </Sicon>
    <Typography size={SelectSize.sm}>{title}</Typography>
  </Container>
);

export default NavbarItem;
