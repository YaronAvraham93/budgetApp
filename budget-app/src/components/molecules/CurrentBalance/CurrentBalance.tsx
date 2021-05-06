import React from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';
import { ICurrentBalanceProps } from '../../../models/index';
import theme from '../../../style/theme/theme';

const { colors, breakpoints } = theme;
const Container = styled.div<ICurrentBalanceProps>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  background-color: ${colors.purple.lightPurple};
  border-radius: 1rem;
  @media (max-width: ${breakpoints.tablet}) {
    height: ${({ open }) => (open ? '86%' : ' 0')};
    width: ${({ open }) => (open ? '50%' : '100%')};
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding-left: 94px;
  }
`;

const CurrentBalance: React.FC<ICurrentBalanceProps> = ({ open, currentBalance, title }) => (
  <Container open={open}>
    <Typography size={SelectSize.lg} color="white">
      $
      {currentBalance}
    </Typography>
    <Typography size={SelectSize.sm} color="white">
      {title}
    </Typography>
  </Container>
);
export default CurrentBalance;
