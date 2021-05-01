import React, { useContext } from 'react';
// import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import { TransactionContext } from '../../../contexts/contextTransaction';
// import getExpensesByCategories from '../../../helpers/getExpensesByCategories';

const PieChart: React.FC = () => {
  const { transactions } = useContext(TransactionContext);
  const b = transactions.slice(0, 6);
  const x = b.map(({ category }) => category);
  const y = b.map(({ amount }) => amount);
  const series = y;
  const chartOptions = {
    labels: x,
  };
  return (
    <>
      <ReactApexChart options={chartOptions} series={series} type="pie" height={350} />
    </>
  );
};
export default PieChart;
