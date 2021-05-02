import { faCheckCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import theme from '../style/theme/theme';

const { colors } = theme;
const getTransactionStyle = (paymentMethod: string) => {
  switch (paymentMethod) {
    case 'ATM':
      return {
        text: 'ATM deposit',
        icon: faCheckCircle,
        color: colors.green.mediumGreen,
        backgroundColor: colors.green.mediumGreen,
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
