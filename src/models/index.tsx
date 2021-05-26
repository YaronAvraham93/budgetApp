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
  currentBalance?: string;
  open: boolean;
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
  backgroundColor?: string;
}
export interface IUserDetails {
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
  paymentMethod: string;
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
export interface IOpen {
  open: boolean;
}
export interface IAction {
  type: string;
  payload: any;
}
export interface IPagination {
  transactionsPerPage: number;
  totalTransactions: number;
  paginate: (number: number) => void;
}
export interface IArrTransactions {
  arrTransactions: ITransaction[];
}
export interface ICurrency {
  currencyRate: any;
  selectedCurrency: string;
  setSelectCurrency: (currency: string) => void;
  setCurrencyRate: (currencyRate: object) => void;
}
export interface ICurrencyRowProps {
  onChange: () => void;
}
