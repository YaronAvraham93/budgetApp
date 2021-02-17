import React from 'react';
import styled from 'styled-components';
import Activity from '../../molecules/Activity/Activity';
import CreaditCard from '../../molecules/CreditCard/CreditCard';
import Income from '../../molecules/Income/Income';
import Summary from '../../molecules/Summary/Summary';
import { IMainProps } from '../../../models/index';

const Container = styled.div<IMainProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:
    1fr 1fr 1fr
    ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
`;
const ActivviyWapper = styled.div`
  grid-column: 1/3;
  /* padding-left: 25px; */
`;
const CWapper = styled.div`
  padding-top: 35px;
`;
const Main: React.FC<IMainProps> = ({ height, width }) => (
  <Container height={height} width={width}>
    <CWapper>
      <CreaditCard
        height="22vw"
        width="50vw"
        last4Digits={8998}
        FirstName="Yaron"
        LastName="Avraham"
        month={12}
        year="21"
      />
    </CWapper>
    <Income />
    <Summary
      height="30vh"
      width="45vw"
      titel="Invensmnet"
      subtitel="Revnue"
      revenue="40,000$"
      SinceLastMonth="+5.0%"
      subtiteltwo="Since last month"
      icon="https://img.favpng.com/3/8/12/email-logo-icon-png-favpng-158EyDT9NQ1jfdXbwDdzD6ns6.jpg"
    />
    <Summary
      height="30vh"
      width="45vw"
      titel="Sales"
      subtitel="Revnue"
      revenue="60,000$"
      SinceLastMonth="-3.1%"
      subtiteltwo="Since last month"
      icon="https://img.favpng.com/3/8/12/email-logo-icon-png-favpng-158EyDT9NQ1jfdXbwDdzD6ns6.jpg"
    />
    <ActivviyWapper>
      <Activity />
    </ActivviyWapper>
  </Container>
);

export default Main;
