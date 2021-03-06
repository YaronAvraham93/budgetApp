import React from 'react';
import styled from 'styled-components';
import Dashboard from '../Dashboard/Dashboard';
import Sidebar from '../Sidebar/Sidebar';
import UserInfro from '../UserInfro/UserInfro';

const Container = styled.div(
  ({ theme }) => `
  display: grid;
  grid-template-columns: 0.2fr 0.99fr 0.2fr;
  @media (max-width:${theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 88vw;
    height: 100vh;
  }
`
);
const SidebarWapper = styled.div`
  margin: 0;
`;
const HomePage: React.FC = () => (
  <Container>
    <SidebarWapper>
      <Sidebar />
    </SidebarWapper>
    <Dashboard />
    <UserInfro />
  </Container>
);
export default HomePage;
