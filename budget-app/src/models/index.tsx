import Selects from '../containers/enums/index';

export interface ITypographyProps {
  size?: Selects;
  color?: string;
}
export interface IAvatarProps {
  size?: Selects;
  height?: string;
  src?: any;
  width?: string;
}
export interface IIconProps {
  height?: string;
  src?: any;
  width?: string;
}
export interface INavbarItem {
  text?: string;
  icon?: string;
  width?: string;
  height?: string;
}
export interface ICurrentBalancePops {
  titel?: string;
  text?: string;
  width?: string;
  height?: string;
}
export interface ICardProps {
  last4Digits?: number;
  FirstName?: string;
  LastName?: string;
  year?: string;
  month?: number;
  width?: string;
  height?: string;
}
export interface ISummaryProps {
  icon?: string;
  revenue?: string;
  SinceLastMonth?: string;
  Revenue?: string;
  titel?: string;
  subtitel?: string;
  subtiteltwo?: string;
  width?: string;
  height?: string;
}
export interface IUserrofileProps {
  img?: string;
  emil?: string;
  firstName?: string;
  lastName?: string;
  width?: string;
  height?: string;
}
export interface IPaymentHistoryProps {
  icon?: string;
  titel?: string;
  hour?: string;
  date?: string;
  moneyTransactions?: string;
  money?: string;
  width?: string;
  height?: string;
}
export interface ISidebarProps {
  icon?: string;
  CurrentBalancetText?: string;
  CurrentBalancetTitel?: string;
  width?: string;
  height?: string;
}
export interface IUserInfroProps {
  img?: string;
  emil?: string;
  firstName?: string;
  lastName?: string;
  width?: string;
  height?: string;
}
export interface IMainProps {
  width?: string;
  height?: string;
}
export interface IIncomeProps {
  width?: string;
  height?: string;
}
export interface IActivityProps {
  width?: string;
  height?: string;
}
