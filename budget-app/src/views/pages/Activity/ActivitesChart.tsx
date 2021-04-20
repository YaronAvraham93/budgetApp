import React, { useContext } from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import { TransactionContext } from '../../../contexts/contextTransaction';
import getTotalAmountByPaymentType from '../../../helpers/totalAmountByPaymentType';
import theme from '../../../style/theme/theme';

const Container = styled.div(
  () => `
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

  const incomes = getTotalAmountByPaymentType(transactions, 'Income');
  const expenses = getTotalAmountByPaymentType(transactions, 'Expenses');
  const series = [
    {
      name: 'Income',
      data: incomes,
    },
    {
      name: 'Expenses',
      data: expenses,
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
