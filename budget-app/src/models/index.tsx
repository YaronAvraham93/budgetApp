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
  last4Digits: number;
  firstName: string;
  lastName: string;
  year: number;
  month: number;
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
  [key: string]: string | number | any;
  date: string;
  paymentType: string;
  paymentMethod: string;
  amount: number;
  currency: string;
  location: {
    country: string;
    city: string;
  };
}
export interface ITransactionInfo {
  date: string;
  paymentType: string;
  amount: number;
  currency: string;
  country: string;
  city: string;
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
    expYear: number;
    expMonth: number;
    last4Digits: number;
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
