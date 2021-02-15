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
}
export interface ICurrentBalance {
  text?: string;
}
export interface ICardProps {
  last4Digits?: number;
  FirstName?: string;
  LastName?: string;
  year?: string;
  month?: number;
}
export interface IInvestmentProps {
  icon?: string;
  revenue?: string;
  SinceLastMonth?: string;
  Revenue?: string;
  titel?: string;
  subtitel?: string;
  subtiteltwo?: string;
}
