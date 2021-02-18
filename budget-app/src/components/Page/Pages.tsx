import React from 'react';
import styled from 'styled-components';
import Main from '../organisms/Main/Main';
import Sidebar from '../organisms/Sidebar/Sidebar';
import UserInfro from '../organisms/UserInfro/UserInfro';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 768px) {
    width: 88vw;
    height: 20vh;
  }
`;
const SidebarWapper = styled.div`
  margin: 0;
`;
const Page: React.FC = () => (
  <Container>
    <SidebarWapper>
      <Sidebar
        width="20vw"
        height="100vh"
        icon="https://img.favpng.com/3/8/12/email-logo-icon-png-favpng-158EyDT9NQ1jfdXbwDdzD6ns6.jpg"
        CurrentBalancetTitel="Current Balance"
        CurrentBalancetText="20,000$"
      />
    </SidebarWapper>
    <Main />
    <UserInfro
      firstName="Yaron"
      lastName="Avraham"
      emil="yaronavraham600@gmail.com"
      img="http://www.weijiahong2018.com/static/assets/images/avatars/avatar.png"
    />
  </Container>
);
export default Page;
