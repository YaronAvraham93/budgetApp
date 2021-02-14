import React from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import { Selects } from '../../../containers/enums/index';

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.9;

  height: 26vh;
  width: 26vw;
`;

export default function CurrentBalance() {
  return (
    <SWrapper>
      <Typography size={Selects.lg}>50,000$ </Typography>
      <Typography size={Selects.sm}> Current Balance </Typography>
    </SWrapper>
  );
}
