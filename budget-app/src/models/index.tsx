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
