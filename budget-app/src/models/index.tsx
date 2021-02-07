import { Size } from '../containers/enums/index';

export interface IButtonProps {
  buttonType?: JSX.IntrinsicElements['button']['type'];
  text: string;
  disabled?: boolean;
  size?: Size;
  stretch?: boolean;
  onClick?: () => void;
  onKeyUp?: () => void;
}
