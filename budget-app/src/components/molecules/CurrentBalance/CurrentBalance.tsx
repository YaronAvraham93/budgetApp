import React from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import { Selects } from '../../../containers/enums/index';
import { ICurrentBalance } from '../../../models/index';

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.9;

  height: 26vh;
  width: 26vw;
`;

const CurrentBalance: React.FC<ICurrentBalance> = ({ text }) => (
  <SWrapper>
    <Typography size={Selects.lg}>{text}</Typography>
    <Typography size={Selects.sm}>Current Balance</Typography>
  </SWrapper>
);
export default CurrentBalance;
