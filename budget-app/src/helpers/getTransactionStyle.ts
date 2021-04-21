import { faCheckCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import theme from '../style/theme/theme';

const { colors } = theme;
const getTransactionStyle = (paymentMethod: string) => {
  switch (paymentMethod) {
    case 'ATM':
      return {
        text: 'ATM deposit',
        icon: faCheckCircle,
        color: colors.Purple.darkPurple,
        backgroundColor: colors.Purple.darkPurple,
      };
    case 'credit card':
      return {
        text: 'Credit payment',
        icon: faSignOutAlt,
        color: colors.Red.mediumRed,
        backgroundColor: colors.Red.mediumRed,
      };
    default:
      return {
        text: 'Credit payment',
        icon: faSignOutAlt,
        color: colors.Red.mediumRed,
        backgroundColor: colors.Red.mediumRed,
      };
  }
};

export default getTransactionStyle;
