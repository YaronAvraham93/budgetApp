import React from 'react';
import styled from 'styled-components';
import NavbarItem from '../../molecules/NavbarItem/NavbarItem';
import CurrentBalance from '../../molecules/CurrentBalance/CurrentBalance';
import { ISidebarProps } from '../../../models/index';
import SidebarList from './SidebarList';
import Typography from '../../atoms/Typography/Typography';

const Container = styled.div<ISidebarProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4333a0;
  border-radius: 1rem;
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
  @media (max-width: 768px) {
    width: 20vw;
    height: 100vh;
  }
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

const Sidebar: React.FC<ISidebarProps> = ({ height, width, CurrentBalancetTitel, CurrentBalancetText }) => (
  <Container width={width} height={height}>
    <SWrapper>
      <CurrentBalance height="19vh" width="15vw" text={CurrentBalancetText} titel={CurrentBalancetTitel} />
    </SWrapper>
    <NavbarUl>
      {SidebarList.map((item) => (
        <Typography>{item.label}</Typography>
      ))}
      {SidebarList.map((item) =>
        item.list.map((i) => (
          <NavbarItem height="8vh" width="12vw" icon={i.icon} titel={i.titel} route={i.rout} key={i.id} />
        ))
      )}
    </NavbarUl>
  </Container>
);
export default Sidebar;
