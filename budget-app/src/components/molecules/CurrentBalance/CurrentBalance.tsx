import React from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import { Selects } from '../../../containers/enums/index';
import { ICurrentBalance } from '../../../models/index';

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  background-color: #bb9ee9;
  border-radius: 1rem;
  height: 26vh;
  width: 26vw;
`;

const CurrentBalance: React.FC<ICurrentBalance> = ({ text }) => (
  <SWrapper>
    <Typography size={Selects.lg} color="white">
      {text}
    </Typography>
    <Typography size={Selects.sm} color="white">
      Current Balance
    </Typography>
  </SWrapper>
);
export default CurrentBalance;
