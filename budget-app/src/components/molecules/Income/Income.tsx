import React from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import { IIncomeProps } from '../../../models/index';

const series = [
  {
    name: 'Desktops',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
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
    text: 'Product Trends by Month',
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

const Container = styled.div<IIncomeProps>`
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
`;

const Income: React.FC<IIncomeProps> = ({ height, width }) => (
  <Container height={height} width={width}>
    <ReactApexChart options={options} series={series} type="line" height={350} />
  </Container>
);
export default Income;
