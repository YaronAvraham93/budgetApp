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
  titel?: string;
  icon?: string;
  route?: string;
  width?: string;
  height?: string;
}
export interface ICurrentBalancePops {
  titel?: string;
  text?: string;
  width?: string;
  height?: string;
}
export interface ICreditCardProps {
  last4Digits?: number;
  firstName?: string;
  lastName?: string;
  year?: string;
  month?: number;
}
export interface ISummaryCardProps {
  icon?: string;
  revenue?: string;
  sinceLastMonth?: string;
  Revenue?: string;
  title?: string;
  subtitle?: string;
  subtiteltwo?: string;
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
  icon?: string;
  revenue?: string;
  SinceLastMonth?: string;
  Revenue?: string;
  titel?: string;
  subtitel?: string;
  subtiteltwo?: string;
  width?: string;
  height?: string;
  last4Digits?: number;
  FirstName?: string;
  LastName?: string;
  year?: string;
  month?: number;
}
