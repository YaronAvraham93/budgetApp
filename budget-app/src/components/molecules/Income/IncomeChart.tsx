import React from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import { series, options } from '../../../constants/Chart/IncomeData';

const Container = styled.div(
  ({ theme }) => `
  height: 40vh;
  width: 25vw;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 60vw;
    height: 50
  }
`
);

const IncomeChart: React.FC = () => (
  <Container>
    <ReactApexChart options={options} series={series} type="line" height={235} />
  </Container>
);
export default IncomeChart;
