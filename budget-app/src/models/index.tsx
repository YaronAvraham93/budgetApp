import Selects from '../containers/enums/index';

export interface ITypography {
  size?: Selects;
  color?: string;
}
export interface IAvatar {
  src?: any;
}
export interface IIcon {
  height?: string;
  width?: string;
  icon?: any;
  color?: string;
  backgroundColor?: string;
}
export interface INavbarItem {
  title?: string;
  icon?: any;
  route?: string;
}
export interface ICurrentBalance {
  title?: string;
  text?: string;
}
export interface ICreditCard {
  last4Digits?: number;
  firstName?: string;
  lastName?: string;
  year?: string;
  month?: number;
}
export interface ISummaryCard {
  icon?: any;
  revenue?: string;
  sinceLastMonth?: string;
  Revenue?: string;
  title?: string;
  subtitle?: string;
  subtiteltwo?: string;
  backgroundColor?: string;
}
export interface IUserrofile {
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
