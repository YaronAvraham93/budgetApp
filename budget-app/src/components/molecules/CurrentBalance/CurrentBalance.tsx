import React from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import { Selects } from '../../../containers/enums/index';
import { ICurrentBalancePops } from '../../../models/index';

const Container = styled.div<ICurrentBalancePops>`
  height: 19vh;
  width: 12;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  background-color: #5142a7;
  border-radius: 1rem;
  @media (max-width: 768px) {
    width: 21vw;
    height: 28vh;
  }
`;

const CurrentBalance: React.FC<ICurrentBalancePops> = ({ width, height, text, titel }) => (
  <Container width={width} height={height}>
    <Typography size={Selects.lg} color="white">
      {text}
    </Typography>
    <Typography size={Selects.sm} color="white">
      {titel}
    </Typography>
  </Container>
);
export default CurrentBalance;
