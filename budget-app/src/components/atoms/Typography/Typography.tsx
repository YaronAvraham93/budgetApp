import React from 'react';
import styled from 'styled-components';
import { Selects } from '../../../containers/enums/index';
import { ITypographyProps } from '../../../models/index';

const getSize = (size?: Selects) => {
  switch (size) {
    case Selects.xs:
      return `font-size: 8px `;
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
  ${(props) => `color:${props.color}`};
`;

const Typography: React.FC<ITypographyProps> = ({ color, size = Selects.md, children }) => (
  <STypographyProps size={size} color={color}>
    {children}
  </STypographyProps>
);

export default Typography;
