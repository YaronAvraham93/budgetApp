import React from 'react';
import styled from 'styled-components';
import Main from '../organisms/Main/Main';
import Sidebar from '../organisms/Sidebar/Sidebar';
import UserInfro from '../organisms/UserInfro/UserInfro';

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.99fr 0.2fr;
  @media (max-width: 768px) {
    width: 88vw;
    height: 100vh;
  }
`;
const SidebarWapper = styled.div`
  margin: 0;
`;
const Page: React.FC = () => (
  <Container>
    <SidebarWapper>
      <Sidebar
        width="15vw"
        height="140vh"
        icon="https://img.favpng.com/3/8/12/email-logo-icon-png-favpng-158EyDT9NQ1jfdXbwDdzD6ns6.jpg"
        CurrentBalancetTitel="Current Balance"
        CurrentBalancetText="20,000$"
      />
    </SidebarWapper>
    <Main
      width="15vw"
      height="13vh"
      month={12}
      year="/21"
      LastName="Avraham"
      FirstName="Yaron"
      last4Digits={5555}
      subtiteltwo="Since last month"
      subtitel="Revnue"
      titel="INVENSMENT"
      SinceLastMonth="+5.0%"
      revenue="40,000$"
      icon="https://img.favpng.com/3/8/12/email-logo-icon-png-favpng-158EyDT9NQ1jfdXbwDdzD6ns6.jpg"
    />
    <UserInfro
      width="15vw"
      height="140vh"
      firstName="Yaron"
      lastName="Avraham"
      emil="yaronavraham600@gmail.com"
      img="http://www.weijiahong2018.com/static/assets/images/avatars/avatar.png"
    />
  </Container>
);
export default Page;
