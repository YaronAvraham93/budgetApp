import React, { useContext } from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import { TransactionContext } from '../../../contexts/contextTransaction';
import getTotalAmountByPaymentType from '../../../helpers/totalAmountByPaymentType';
import theme from '../../../style/theme/theme';

const { breakpoints } = theme;
const Container = styled.div`
  box-shadow: rgba(149, 157, 165, 70) 0px 8px 24px;
  border-radius: 25px;
  height: 90%;
  width: 90%;
  @media (max-width: ${breakpoints.tablet}) {
    width: 95%;
    height: 91%;
  }
`;

const ActivitesChart: React.FC = () => {
  const { transactions } = useContext(TransactionContext);

  const incomes = getTotalAmountByPaymentType(transactions, 'Income');
  const expenses = getTotalAmountByPaymentType(transactions, 'Expenses');
  const series = [
    {
      name: 'Incomes',
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
      <ReactApexChart options={options} series={series} type="bar" height={307} />
    </Container>
  );
};
export default ActivitesChart;
