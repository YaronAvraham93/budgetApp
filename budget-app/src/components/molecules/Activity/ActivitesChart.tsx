import React from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import { options, series } from '../../../constants/Chart/ActivityData';

const Container = styled.div(
  ({ theme }) => `
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 25px;
  height: 60vh;
  width: 60vw;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 60vw;
    height: 61vh;
  }
`
);
const ActivitesChart: React.FC = () => (
  <Container>
    <ReactApexChart options={options} series={series} type="bar" height={350} />
  </Container>
);
export default ActivitesChart;
