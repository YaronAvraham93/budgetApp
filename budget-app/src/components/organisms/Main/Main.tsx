import React from 'react';
import styled from 'styled-components';
import Activity from '../../molecules/Activity/Activity';
import CreaditCard from '../../molecules/CreditCard/CreditCard';
import Income from '../../molecules/Income/Income';
import Summary from '../../molecules/Summary/Summary';
import { IMainProps } from '../../../models/index';

const Container = styled.div<IMainProps>`
  display: grid;
  grid-template-columns: 0fr 0.5fr;
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
  @media (max-width: 768px) {
    width: 88vw;
    height: 170vh;
  }
`;
const ActivviyWapper = styled.div`
  grid-column: 1/3;
  width: 0;
  height: 62vh;
`;
const CWapper = styled.div`
  height: 44vh;
  width: 40vw;
`;
const SWapper = styled.div`
  width: 0;
`;
const S2Wapper = styled.div`
  width: 0;
`;
const Main: React.FC<IMainProps> = ({ height, width }) => (
  <Container height={height} width={width}>
    <CWapper>
      <CreaditCard
        height="15vw"
        width="34vw"
        last4Digits={8998}
        FirstName="Yaron"
        LastName="Avraham"
        month={12}
        year="21"
      />
    </CWapper>
    <Income width="37vw" height="65vh" />
    <SWapper>
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
    </SWapper>
    <S2Wapper>
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
    </S2Wapper>
    <ActivviyWapper>
      <Activity height="75vh" width="75vw" />
    </ActivviyWapper>
  </Container>
);

export default Main;
