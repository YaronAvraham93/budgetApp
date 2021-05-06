import React, { useContext } from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import { TransactionContext } from '../../../contexts/contextTransaction';

const SText = styled.label`
  padding-left: 78px;
  font-family: cursive;
`;
const PieChart: React.FC = () => {
  const { transactions } = useContext(TransactionContext);
  const last6Transactions = transactions.slice(0, 6);
  const categoryList = last6Transactions.map(({ category }) => category);
  const amountList = last6Transactions.map(({ amount }) => amount);
  const series = amountList;
  const chartOptions = {
    labels: categoryList,
  };
  return (
    <>
      <SText>Last 6 transactions</SText>
      <ReactApexChart options={chartOptions} series={series} type="pie" height={350} />
    </>
  );
};
export default PieChart;
