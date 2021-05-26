import { faThLarge, faMoneyCheck, faChartPie, faUser } from '@fortawesome/free-solid-svg-icons';

const navbarItem = [
  {
    icon: faThLarge,
    title: 'Dashboard',
    route: '/',
    id: 1,
  },
  {
    icon: faMoneyCheck,
    title: 'Transactions',
    route: '/Transactions',
    id: 2,
  },
  {
    icon: faChartPie,
    title: 'Charts',
    route: '/Charts',
    id: 3,
  },
  {
    icon: faUser,
    title: 'User Profile',
    route: '/UserProfile',
    id: 5,
  },
];

export default navbarItem;
