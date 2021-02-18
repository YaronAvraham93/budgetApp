import React from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import { IActivityProps } from '../../../models/index';

const series = [
  {
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
  {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  },
];
const options = {
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)',
    },
  },
  fill: {
    opacity: 1,
  },
  // tooltip: {
  //   y: {
  //     formatter: function (val) {
  //       return "$ " + val + " thousands"
  //     }
  //   }
  // }
};
const Container = styled.div<IActivityProps>`
  width: 95vw;
  height: 75vh;
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
`;
const Activity: React.FC<IActivityProps> = ({ height, width }) => (
  <Container height={height} width={width}>
    <ReactApexChart options={options} series={series} type="bar" height={350} />
  </Container>
);
export default Activity;
