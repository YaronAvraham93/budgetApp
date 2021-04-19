import Selects from '../containers/enums/index';

export interface ITypographyProps {
  size?: Selects;
  color?: string;
}
export interface IAvatarProps {
  src?: any;
}
export interface IIconProps {
  height?: string;
  width?: string;
  icon?: any;
  color?: string;
  backgroundColor?: string;
}
export interface INavbarItem {
  title: string;
  icon?: any;
}
export interface ICurrentBalanceProps {
  title?: string;
  text?: string;
}
export interface ICreditCardProps {
  last4Digits: Number;
  firstName: string;
  lastName: string;
  year: Number;
  month: Number;
}
export interface ISummaryCard {
  icon?: any;
  revenue: string;
  sinceLastMonth: string;
  title: string;
  subtitle: string;
  subtiteltwo: string;
  backgroundColor?: string;
}
export interface IUserProfile {
  avatarSrc?: string;
  email: string;
  firstName: string;
  lastName: string;
}
export interface ITransaction {
  date: string;
  paymentType: string;
  paymentMethod: string;
  amount: Number;
  currency: string;
  category?: string;
  company?: string;
  cancelled?: boolean;
  location: {
    country: string;
    city: string;
  };
}

export interface ITransactionInitialState {
  transactions: ITransaction[];
  setTransactions: (transactions: ITransaction[]) => void;
}
export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  currentBalance: string;
  currentBalanceCurrency: string;
  creditCard: {
    expYear: Number;
    expMonth: Number;
    last4Digits: Number;
  }[];
}
export interface IUserInitialState {
  user: IUser;
  setUser: (user: IUser) => void;
}
export interface IAction {
  type: string;
  payload: any;
}
