import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Dashboard from '../Dashboard/Dashboard';
import NavBar from '../../../components/organisms/NavBar/NavBar';
import UserInfro from '../../../components/organisms/UserInfo/UserInfo';
import Charts from './Charts';
import Transactions from './Transactions';
import Cards from './Cards';
import BudgetServiceApi from '../../../services/budgetServiceApi';
import { TransactionContext } from '../../../contexts/contextTransaction';
import { UserContext } from '../../../contexts/userContext';
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
const NavBarWapper = styled.div`
  margin: 0;
`;
const HomePage: React.FC = () => {
  const { setTransactions } = useContext(TransactionContext);
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      const transactions = await BudgetServiceApi.getAllTransactions();
      setTransactions(transactions);
      const user = await BudgetServiceApi.getUserById('606b2062c88c6d0005fe8f91');
      setUser(user);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <NavBarWapper>
        <NavBar />
      </NavBarWapper>
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
