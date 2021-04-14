import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Dashboard from '../Dashboard/Dashboard';
import Sidebar from '../Sidebar/Sidebar';
import UserInfro from '../UserInfro/UserInfro';
import Charts from './Charts';
import Transactions from './Transactions';
import Cards from './Cards';
import BudgetServiceApi from '../../../services/budgetServiceApi';
// import { TransactionContext } from '../../../contexts/transactionContext';
import { TransactionContext } from '../../../contexts/contextTransaction';
import theme from '../../../style/theme/theme';

const Container = styled.div(
  () => `
  display: grid;
  grid-template-columns: 0.2fr 0.99fr 0.2fr;
  @media (max-width:${theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 88vw;
    height: 100vh;
  }
`
);
const SidebarWapper = styled.div`
  margin: 0;
`;
const HomePage: React.FC = () => {
  const { setTransactions, transactions } = useContext(TransactionContext);
  useEffect(() => {
    const fetchData = async () => {
      const data = await BudgetServiceApi.getAllTransactions();
      setTransactions(data);
    };
    fetchData();
  }, []);
  console.log(transactions);

  return (
    <Container>
      <SidebarWapper>
        <Sidebar />
      </SidebarWapper>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/Transactions" component={Transactions} />
        <Route path="/Charts" component={Charts} />
        <Route path="/Cards" component={Cards} />
      </Switch>
      <UserInfro />
    </Container>
  );
};
export default HomePage;
