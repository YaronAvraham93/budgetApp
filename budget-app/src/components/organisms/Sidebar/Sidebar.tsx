import React from 'react';
import styled from 'styled-components';
import NavbarItem from '../../molecules/NavbarItem/NavbarItem';
import CurrentBalance from '../../molecules/CurrentBalance/CurrentBalance';
import SidebarItem from '../../../constants/SidebarItem';

const Container = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4333a0;
  border-radius: 1rem;
  height: 140vh;
  width: 15vw;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 20vw;
    height: 100vh;
  }
`
);
const CurrentBalanceWrapper = styled.div`
  padding-top: 50px;
`;
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
      {SidebarItem.map(({ icon, title, route, id }) => (
        <NavbarItem icon={icon} title={title} route={route} key={id} />
      ))}
    </NavbarList>
  </Container>
);
export default Sidebar;
