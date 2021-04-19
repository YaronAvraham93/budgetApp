import React, { useContext } from 'react';
import styled from 'styled-components';
import { faBox, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Activity from '../../molecules/Activity/ActivitesChart';
import CreaditCard from '../../molecules/CreditCard/CreditCard';
import Income from '../../molecules/Income/IncomeChart';
import SummaryCard from '../../molecules/SummaryCard/SummaryCard';
import theme from '../../../style/theme/theme';
import { TransactionContext } from '../../../contexts/contextTransaction';
import { UserContext } from '../../../contexts/userContext';
import getAverage from '../../../helpers/average';

const Container = styled.div(
  () => `
  display: block;
  width: 65vw;
  height: 47vh;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 68vw;
    height: 175vh;
    flex-direction: column;
    padding-left: 20%;
  }
`
);
const ActivviyWapper = styled.div`
  width: 68vw;
  display: flex;
  justify-content: center;
`;
const CreaditCardWapper = styled.div(
  () => `
  height: 45vh;
  width: 67vw;
  display: flex;
  padding-top: 15px;
  justify-content: space-around;
  flex-direction: row;
  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 73vh;
    flex-direction: column;
  }
`
);
const SummaryCardWapper = styled.div(
  () => `
  width: 69vw;
  height: 30vh;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 73vh;
    flex-direction: column;
  }
`
);

const Dashboard: React.FC = () => {
  const { transactions } = useContext(TransactionContext);
  const { user } = useContext(UserContext);

  const income = getAverage(transactions.filter(({ paymentType }) => paymentType === 'Income'));
  const Expenses = getAverage(transactions.filter(({ paymentType }) => paymentType === 'Expenses'));

  return (
    <Container>
      <CreaditCardWapper>
        <CreaditCard
          last4Digits={user.creditCard[0].last4Digits}
          firstName={user.firstName}
          lastName={user.lastName}
          month={user.creditCard[0].expMonth}
          year={user.creditCard[0].expYear}
        />
        <Income />
      </CreaditCardWapper>
      <SummaryCardWapper>
        <SummaryCard
          title="Income"
          subtitle="Average"
          revenue={income}
          sinceLastMonth="+5.0%"
          subtiteltwo="Since last month"
          icon={faBox}
          backgroundColor={theme.colors.lightBlue}
        />
        <SummaryCard
          title="Expenses"
          subtitle="Average"
          revenue={Expenses}
          sinceLastMonth="+5.0%"
          subtiteltwo="Since last month"
          icon={faChartLine}
          backgroundColor={theme.colors.darkBlue}
        />
      </SummaryCardWapper>
      <ActivviyWapper>
        <Activity />
      </ActivviyWapper>
    </Container>
  );
};

export default Dashboard;
