import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavbarItem from '../../molecules/NavbarItem/NavbarItem';
import CurrentBalance from '../../molecules/CurrentBalance/CurrentBalance';
import navbarItem from '../../../constants/SidebarItem';
import theme from '../../../style/theme/theme';
import { UserContext } from '../../../contexts/userContext';

const { colors, breakpoints } = theme;
const Container = styled.div(
  () => `
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.purple.darkPurple};
  border-radius: 1rem;
  height: 100%;
  width: 120%;
  @media (max-width: ${breakpoints.tablet}) {
    width: 10vw;
    height: 10vh;

  }
`
);
const CurrentBalanceWrapper = styled.div(
  () => `
  height: 14%;
  width: 84%;
  padding-top: 50px;
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
   
  }`
);
const NavbarList = styled.ul`
  padding: 0;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const NavBar: React.FC = () => {
  const { user } = useContext(UserContext);
  const { currentBalance } = user;
  return (
    <Container>
      <CurrentBalanceWrapper>
        <CurrentBalance text={currentBalance} title="Current Balance" />
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
};
export default NavBar;
