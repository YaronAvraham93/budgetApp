import React from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import { IincomeChart } from '../../../models/index';

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
const incomeChart = (array: IincomeChart) => [
  {
    name: 'income',
    data: array,
  },
];

const options = {
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  title: {
    text: 'Income',
    align: 'left',
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
};
const IncomeChart: React.FC<IincomeChart> = ({ series }) => (
  <Container>
    <ReactApexChart options={options} series={incomeChart(series)} type="line" height={235} />
  </Container>
);
export default IncomeChart;
