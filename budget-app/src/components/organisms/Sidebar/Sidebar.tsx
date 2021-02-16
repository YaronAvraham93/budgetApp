import React from 'react';
import styled from 'styled-components';
import NavbarItem from '../../molecules/NavbarItem/NavbarItem';
import CurrentBalance from '../../molecules/CurrentBalance/CurrentBalance';
import { ISidebarProps } from '../../../models/index';

const Container = styled.div<ISidebarProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4333a0;
  border-radius: 1rem;
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
`;
const SWrapper = styled.div`
  padding-top: 50px;
`;
const NavbarUl = styled.ul`
  padding: 0;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;
// const NavbarLi = styled.il`
//   padding-top: 20px;
// `;

const List = ['Deshboard', 'Cards', 'Charts', 'calendar', 'Messages', 'User Profile', 'Settings'];

const Sidebar: React.FC<ISidebarProps> = ({ height, width, icon, CurrentBalancetTitel, CurrentBalancetText }) => (
  <Container width={width} height={height}>
    <SWrapper>
      <CurrentBalance height="19vh" width="15vw" text={CurrentBalancetText} titel={CurrentBalancetTitel} />
    </SWrapper>
    <NavbarUl>
      {List.map((item) => (
        <NavbarItem height="6vh" width="14vw" icon={icon} text={item} />
      ))}
    </NavbarUl>
  </Container>
);
export default Sidebar;
