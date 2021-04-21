import React, { useContext } from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import { TransactionContext } from '../../../contexts/contextTransaction';
import theme from '../../../style/theme/theme';
import getTotalAmountByPaymentType from '../../../helpers/totalAmountByPaymentType';

const Container = styled.div(
  () => `
  height: 84%;
  width: 40%;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 60%;
    height: 50%
  }
`
);

const IncomeChart: React.FC = () => {
  const { transactions } = useContext(TransactionContext);
  const incomeChart = [
    {
      name: 'income',
      data: getTotalAmountByPaymentType(transactions, 'Income'),
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
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: transactions.map(({ date }) => new Date(date).toLocaleString('default', { month: 'short' })),
    },
  };
  return (
    <Container>
      <ReactApexChart options={options} series={incomeChart} type="line" height={235} />
    </Container>
  );
};
export default IncomeChart;
