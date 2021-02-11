import React from 'react';
import styled from 'styled-components';
import Selects from '../../../containers/enums/index';
import { ITypographyProps } from '../../../models/index';

const getSize = (size?: Selects) => {
  switch (size) {
    case Selects.sm:
      return `font-size: 16px `;
    case Selects.md:
      return `font-size: 26px `;
    case Selects.lg:
      return `font-size: 36px `;
    default:
      return `font-size: 16px `;
  }
};

const STypographyProps = styled.label<ITypographyProps>`
  ${(props) => getSize(props.size)};
`;

const Typography: React.FC<ITypographyProps> = ({ size = Selects.md, children }) => (
  <STypographyProps size={size}>{children}</STypographyProps>
);

export default Typography;
