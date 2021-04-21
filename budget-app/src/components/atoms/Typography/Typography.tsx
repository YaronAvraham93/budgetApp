import React from 'react';
import styled from 'styled-components';
import { SelectSize } from '../../../containers/enums/index';
import { ITypographyProps } from '../../../models/index';

const getSize = (size?: SelectSize) => {
  switch (size) {
    case SelectSize.xs:
      return `font-size: 10px `;
    case SelectSize.sm:
      return `font-size: 16px `;
    case SelectSize.md:
      return `font-size: 26px `;
    case SelectSize.lg:
      return `font-size: 36px `;
    default:
      return `font-size: 16px `;
  }
};

const STypographyProps = styled.label<ITypographyProps>`
  ${(props) => getSize(props.size)};
  ${(props) => `color:${props.color}`};

  @media (max-width: 768px) {
    width: 10%;
    height: 10%;
  }
`;

const Typography: React.FC<ITypographyProps> = ({ color, size = SelectSize.md, children }) => (
  <STypographyProps size={size} color={color}>
    {children}
  </STypographyProps>
);

export default Typography;
