import React, { useContext } from 'react';
import styled from 'styled-components';
import { faBox, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Activity from '../../../components/organisms/ActivityChart/ActivitesChart';
import CreaditCard from '../../../components/molecules/CreditCard/CreditCard';
import Income from '../../../components/organisms/IncomeChart/IncomeChart';
import SummaryCard from '../../../components/organisms/SummaryCard/SummaryCard';
import theme from '../../../style/theme/theme';
import { TransactionContext } from '../../../contexts/contextTransaction';
import { UserContext } from '../../../contexts/userContext';
import getAverage from '../../../helpers/average';
import { CurrencyContext } from '../../../contexts/currencyContext';

const { breakpoints, colors } = theme;
const Container = styled.div`
  display: block;
  width: 100%;
  height: 32%;
  @media (max-width: ${breakpoints.tablet}) {
    width: 97%;
    height: 100%;
    flex-direction: column;
    padding-left: 20px;
  }
`;

const ActivviyWapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 20px;
  }
`;
const CreaditCardWapper = styled.div`
  height: 32%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    height: 62%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;

const SummaryCardWapper = styled.div`
  width: 100%;
  height: 26%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  @media (max-width: ${breakpoints.tablet}) {
    height: 50%;
    width: 100%;
    padding-top: 26px;
    flex-direction: column;
  }
`;

const Dashboard: React.FC = () => {
  const { transactions } = useContext(TransactionContext);
  const { user } = useContext(UserContext);
  const { currencyRate } = useContext(CurrencyContext);
  const { creditCard, firstName, lastName } = user;
  const income = transactions.filter(({ paymentType }) => paymentType === 'Income');
  const expenses = transactions.filter(({ paymentType }) => paymentType === 'Expenses');

  return (
    <Container>
      <CreaditCardWapper>
        <CreaditCard
          last4Digits={creditCard[0].last4Digits}
          firstName={firstName}
          lastName={lastName}
          month={creditCard[0].expMonth}
          year={creditCard[0].expYear}
        />
        <Income />
      </CreaditCardWapper>
      <SummaryCardWapper>
        <SummaryCard
          title="Income"
          subtitle="Average"
          revenue={getAverage(income, currencyRate)}
          sinceLastMonth="Since last month"
          icon={faBox}
          backgroundColor={colors.blue.lightBlue}
        />
        <SummaryCard
          title="Expenses"
          subtitle="Average"
          revenue={getAverage(expenses, currencyRate)}
          sinceLastMonth="Since last month"
          icon={faChartLine}
          backgroundColor={colors.blue.darkBlue}
        />
      </SummaryCardWapper>
      <ActivviyWapper>
        <Activity />
      </ActivviyWapper>
    </Container>
  );
};

export default Dashboard;
