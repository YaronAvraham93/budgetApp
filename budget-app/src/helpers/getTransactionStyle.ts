import { faCheckCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import theme from '../style/theme/theme';

const { colors } = theme;
const getTransactionStyle = (paymentMethod: string) => {
  switch (paymentMethod) {
    case 'ATM':
      return {
        text: 'ATM deposit',
        icon: faCheckCircle,
        color: colors.purple.darkPurple,
        backgroundColor: colors.purple.darkPurple,
      };
    case 'credit card':
      return {
        text: 'Credit payment',
        icon: faSignOutAlt,
        color: colors.red.mediumRed,
        backgroundColor: colors.red.mediumRed,
      };
    default:
      return {
        text: 'Credit payment',
        icon: faSignOutAlt,
        color: colors.red.mediumRed,
        backgroundColor: colors.red.mediumRed,
      };
  }
};

export default getTransactionStyle;
