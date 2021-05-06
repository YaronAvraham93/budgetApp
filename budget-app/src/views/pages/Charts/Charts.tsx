import React from 'react';
import styled from 'styled-components';
import Activity from '../../../components/organisms/ActivityChart/ActivitesChart';
import PieChart from '../../../components/organisms/PieChart/PieChart';
import Income from '../../../components/organisms/IncomeChart/IncomeChart';
import theme from '../../../style/theme/theme';

const { breakpoints } = theme;
const SContainer = styled.div`
  display: flex;
  width: 100%;
  height: 42%;
  flex-wrap: wrap;
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
const SPieChart = styled.div`
  width: 45%;
  height: 17%;
  @media (max-width: ${breakpoints.tablet}) {
    width: 85%;
    height: 40%;
  }
`;
const SIncome = styled.div`
  width: 100%;
  height: 38%;
  padding-left: 40px;
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 60%;
    padding: 0;
    display: contents;
  }
`;
const SActivity = styled.div`
  width: 55%;
  height: 42%;
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 47%;
  }
`;
const Charts: React.FC = () => (
  <SContainer>
    <SPieChart>
      <PieChart />
    </SPieChart>
    <SActivity>
      <Activity />
    </SActivity>
    <SIncome>
      <Income />
    </SIncome>
  </SContainer>
);

export default Charts;
