import React from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import { Selects } from '../../../containers/enums/index';
import { ICurrentBalancePops } from '../../../models/index';

const SWrapper = styled.div<ICurrentBalancePops>`
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  background-color: #5142a7;
  border-radius: 1rem;
`;

const CurrentBalance: React.FC<ICurrentBalancePops> = ({ width, height, text, titel }) => (
  <SWrapper width={width} height={height}>
    <Typography size={Selects.lg} color="white">
      {text}
    </Typography>
    <Typography size={Selects.sm} color="white">
      {titel}
    </Typography>
  </SWrapper>
);
export default CurrentBalance;
