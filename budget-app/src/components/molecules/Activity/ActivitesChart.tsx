import React, { useContext } from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import { TransactionContext } from '../../../contexts/contextTransaction';

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
  const helperIncome: any = {};
  const helperExpenses: any = {};
  transactions.forEach((transaction: any) => {
    const date = new Date(transaction.date).toLocaleString('default', { month: 'short' });

    if (transaction.paymentType === 'Income') {
      if (!helperIncome[date]) {
        helperIncome[date] = transaction.amount;
      } else {
        helperIncome[date] = +transaction.amount;
      }
    }
    if (transaction.paymentType === 'Expenses') {
      if (!helperExpenses[date]) {
        helperExpenses[date] = transaction.amount;
      } else {
        helperExpenses[date] = +transaction.amount;
      }
    }
  });
  const incomes = Object.entries(helperIncome).map(([month, amount]) => ({ x: month, y: amount }));
  const expenses = Object.entries(helperExpenses).map(([month, amount]) => ({ x: month, y: amount }));
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
