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
}
export interface INavbarItem {
  title?: string;
  icon?: any;
  route?: string;
}
export interface ICurrentBalancePops {
  title?: string;
  text?: string;
}
export interface ICreditCardProps {
  last4Digits?: number;
  firstName?: string;
  lastName?: string;
  year?: string;
  month?: number;
}
export interface ISummaryCardProps {
  icon?: any;
  revenue?: string;
  sinceLastMonth?: string;
  Revenue?: string;
  title?: string;
  subtitle?: string;
  subtiteltwo?: string;
  backgroundColor?: string;
}
export interface IUserrofileProps {
  avatarSrc?: string;
  email: string;
  firstName: string;
  lastName: string;
}
export interface IPaymentHistoryProps {
  icon?: string;
  hour?: string;
  date?: string;
  paymentType?: string;
  paymentMethod?: string;
  amount?: string;
}

export interface IMainProps {
  icon?: string;
  revenue?: string;
  SinceLastMonth?: string;
  Revenue?: string;
  titel?: string;
  subtitel?: string;
  anotherTitle?: string;
  width?: string;
  height?: string;
  last4Digits?: number;
  FirstName?: string;
  LastName?: string;
  year?: string;
  month?: number;
}
