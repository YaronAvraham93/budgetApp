import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavbarItem from '../../molecules/NavbarItem/NavbarItem';
import CurrentBalance from '../../molecules/CurrentBalance/CurrentBalance';
import navbarItem from '../../../constants/SidebarItem';
import theme from '../../../style/theme/theme';
import { UserContext } from '../../../contexts/userContext';
import { IOpen } from '../../../models';
import SelectCurrency from '../../molecules/SelectCurrency/SelectCurrency';

const { colors, breakpoints } = theme;
const Container = styled.div<IOpen>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.purple.darkPurple};
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    height: ${({ open }) => (open ? '100%' : ' 10%')};
    width: ${({ open }) => (open ? '100%' : '8%')};
    transition: width 1s;
    position: fixed;
    top: 0;
    left: 0;
  }
`;

const CurrentBalanceWrapper = styled.div<IOpen>`
  height: 14%;
  width: 84%;
  padding-top: 50px;
  @media (max-width: ${breakpoints.tablet}) {
    display: ${({ open }) => (open ? 'translateX(100%)' : 'none')};
    height: ${({ open }) => (open ? '30%' : '0%')};
    width: ${({ open }) => (open ? '100%' : '0%')};
    display: ${({ open }) => (open ? 'flex' : 'none')};
    justify-content: center;
  }
`;

const NavbarList = styled.ul<IOpen>`
  display: flex;
  height: 35%;
  margin: 0;
  padding: 0;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: ${breakpoints.tablet}) {
    height: 50%;
    width: 93%;
    display: ${({ open }) => (open ? 'translateX(100%)' : 'none')};
  }
`;

const NavBar: React.FC = () => {
  const { user } = useContext(UserContext);
  const { currentBalance } = user;
  const [open, setOpen] = useState(false);
  return (
    <Container open={open} onClick={() => setOpen(!open)}>
      <CurrentBalanceWrapper open={open}>
        <CurrentBalance open={open} text={currentBalance} title="Current Balance" />
      </CurrentBalanceWrapper>
      <NavbarList open={open}>
        {navbarItem.map(({ icon, title, route, id }) => (
          <Link to={route}>
            <NavbarItem icon={icon} title={title} key={id} />
          </Link>
        ))}
      </NavbarList>
      <SelectCurrency onChange={() => {}} />
    </Container>
  );
};
export default NavBar;
