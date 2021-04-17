import { faCheckCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import theme from '../style/theme/theme';

const getTransactionStyle = (paymentMethod: string) => {
  switch (paymentMethod) {
    case 'ATM':
      return {
        text: 'ATM deposit',
        icon: faCheckCircle,
        color: theme.colors.darkPurple,
        backgroundColor: theme.colors.darkPurple,
      };
    case 'credit card':
      return {
        text: 'Credit payment',
        icon: faSignOutAlt,
        color: theme.colors.mediumRed,
        backgroundColor: theme.colors.mediumRed,
      };
    default:
      return {
        text: 'Credit payment',
        icon: faSignOutAlt,
        color: theme.colors.mediumRed,
        backgroundColor: theme.colors.mediumRed,
      };
  }
};

export default getTransactionStyle;
