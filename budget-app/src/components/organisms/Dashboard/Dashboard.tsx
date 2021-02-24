import React from 'react';
import styled from 'styled-components';
import Activity from '../../molecules/Activity/ActivitesChart';
import CreaditCard from '../../molecules/CreditCard/CreditCard';
import Income from '../../molecules/Income/IncomeChart';
import SummaryCard from '../../molecules/SummaryCard/SummaryCard';

const Container = styled.div`
  display: block;
  width: 15vw;
  height: 13vh;
  @media (max-width: 768px) {
    width: 88vw;
    height: 170vh;
  }
`;
const ActivviyWapper = styled.div`
  width: 68vw;
  display: flex;
  justify-content: center;
`;
const CreaditCardWapper = styled.div`
  height: 44vh;
  width: 68vw;
  display: flex;
  padding-top: 15px;
  justify-content: space-around;
  flex-direction: row;
`;
const SummaryCardWapper = styled.div`
  width: 69vw;
  height: 30vh;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;
const Dashboard: React.FC = () => (
  <Container>
    <CreaditCardWapper>
      <CreaditCard last4Digits={5555} firstName="Yaron" lastName="Avraham" month={12} year="/12" />

      <Income />
    </CreaditCardWapper>
    <SummaryCardWapper>
      <SummaryCard
        title="INVENSMENT"
        subtitle="Revnue"
        revenue="40,000$"
        sinceLastMonth="+5.0%"
        subtiteltwo="Since last month"
        icon="https://img.favpng.com/3/8/12/email-logo-icon-png-favpng-158EyDT9NQ1jfdXbwDdzD6ns6.jpg"
      />
      <SummaryCard
        title="INVENSMENT"
        subtitle="Revnue"
        revenue="40,000$"
        sinceLastMonth="+5.0%"
        subtiteltwo="Since last month"
        icon="https://img.favpng.com/3/8/12/email-logo-icon-png-favpng-158EyDT9NQ1jfdXbwDdzD6ns6.jpg"
      />
    </SummaryCardWapper>
    <ActivviyWapper>
      <Activity />
    </ActivviyWapper>
  </Container>
);

export default Dashboard;
