import React from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import { SelectSize } from '../../../containers/enums/index';
import { ICurrentBalancePops } from '../../../models/index';

const Container = styled.div<ICurrentBalancePops>(
  ({ theme }) => `
  height: 19vh;
  width: 12vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  background-color: #5142a7;
  border-radius: 1rem;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 21vw;
    height: 28vh;
  }
`
);

const CurrentBalance: React.FC<ICurrentBalancePops> = ({ text, title }) => (
  <Container>
    <Typography size={SelectSize.lg} color="white">
      {text}
    </Typography>
    <Typography size={SelectSize.sm} color="white">
      {title}
    </Typography>
  </Container>
);
export default CurrentBalance;
