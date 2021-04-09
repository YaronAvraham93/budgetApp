import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavbarItem from '../../molecules/NavbarItem/NavbarItem';
import CurrentBalance from '../../molecules/CurrentBalance/CurrentBalance';
import navbarItem from '../../../constants/SidebarItem';

const Container = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.darkPurple};
  border-radius: 1rem;
  height: 140vh;
  width: 15vw;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 10vw;
    height: 10vh;

  }
`
);
const CurrentBalanceWrapper = styled.div(
  ({ theme }) => `
  padding-top: 50px;
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`
);
const NavbarList = styled.ul`
  padding: 0;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Sidebar: React.FC = () => (
  <Container>
    <CurrentBalanceWrapper>
      <CurrentBalance text="20,000$" title="Current Balance" />
    </CurrentBalanceWrapper>
    <NavbarList>
      {navbarItem.map(({ icon, title, route, id }) => (
        <Link to={route}>
          <NavbarItem icon={icon} title={title} key={id} />
        </Link>
      ))}
    </NavbarList>
  </Container>
);
export default Sidebar;
