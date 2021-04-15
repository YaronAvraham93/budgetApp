import React, { useContext } from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import { TransactionContext } from '../../../contexts/contextTransaction';
import filtredByPaymentType from '../../../helpers/filtredByPaymentType';

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
const ActivitesChart: React.FC = () => {
  const { transactions } = useContext(TransactionContext);
  const series = [
    {
      name: 'Income',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'Expenses',
      data: filtredByPaymentType(transactions, 'Expenses'),
    },
  ];
  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    title: {
      text: 'Activity',
      align: 'left',
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
      categories: transactions.map(({ date }) => new Date(date).toLocaleString('default', { month: 'short' })),
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
  };
  return (
    <Container>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </Container>
  );
};
export default ActivitesChart;
