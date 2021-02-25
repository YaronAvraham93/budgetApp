import React from 'react';
import styled from 'styled-components';
import Main from '../organisms/Dashboard/Dashboard';
import Sidebar from '../organisms/Sidebar/Sidebar';
import UserInfro from '../organisms/UserInfro/UserInfro';

const Container = styled.div(
  ({ theme }) => `
  display: grid;
  grid-template-columns: 0.2fr 0.99fr 0.2fr;
  @media (max-width:${theme.breakpoints.tablet}) {
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
    <Main />
    <UserInfro />
  </Container>
);
export default HomePage;
