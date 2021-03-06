import React, { useEffect, useContext, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Dashboard from '../Dashboard/Dashboard';
import NavBar from '../../../components/organisms/NavBar/NavBar';
import UserInfo from '../../../components/organisms/UserInfo/UserDetails';
import Charts from '../Charts/Charts';
import Transactions from '../Transactions/Transactions';
import BudgetServiceApi from '../../../services/budgetServiceApi';
import CurrencyService from '../../../services/apiCurrencyService';
import { TransactionContext } from '../../../contexts/contextTransaction';
import { UserContext } from '../../../contexts/userContext';
import theme from '../../../style/theme/theme';
import { CurrencyContext } from '../../../contexts/currencyContext';
import UserProfile from '../UserProfile/UserProfile';

const Container = styled.div`
  display: grid;
  grid-template-columns: 0fr 0.99fr 0.3fr;
  width: 98vw;
  height: 100vh;
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 0.5fr 1.5fr;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`;

const NavBarWapper = styled.div`
  margin: 0;
  height: 34%;
  width: 75%;
  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 100vh;
  }
`;

const HomePage: React.FC = () => {
  const { setTransactions } = useContext(TransactionContext);
  const { setUser } = useContext(UserContext);
  const { setCurrencyRate, selectedCurrency } = useContext(CurrencyContext);
  const [lodaing, setLodaing] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const transactions = await BudgetServiceApi.getAllTransactions();
      const user = await BudgetServiceApi.getUserById('606b2062c88c6d0005fe8f91');
      setTransactions(transactions);
      setUser(user);
      setLodaing(true);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const currencyDate = await CurrencyService.getCurrencyrates(selectedCurrency);
      setCurrencyRate(currencyDate.conversion_rates);
    };
    fetchData();
  }, [selectedCurrency]);

  return (
    <Container>
      {lodaing ? (
        <>
          <NavBarWapper>
            <NavBar />
          </NavBarWapper>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/Transactions" component={Transactions} />
            <Route path="/Charts" component={Charts} />
            <Route path="/UserProfile" component={UserProfile} />
          </Switch>
          <UserInfo />
        </>
      ) : (
        []
      )}
    </Container>
  );
};
export default HomePage;
