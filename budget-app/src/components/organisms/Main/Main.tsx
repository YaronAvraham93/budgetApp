import React from 'react';
import styled from 'styled-components';
import Activity from '../../molecules/Activity/Activity';
import CreaditCard from '../../molecules/CreditCard/CreditCard';
import Income from '../../molecules/Income/Income';
import Summary from '../../molecules/Summary/Summary';
import { IMainProps } from '../../../models/index';

const Container = styled.div<IMainProps>`
  display: grid;
  grid-template-rows: 1fr 1fr;
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
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SWapper = styled.div`
  width: 0;
`;
const Main: React.FC<IMainProps> = ({
  height,
  width,
  subtiteltwo,
  subtitel,
  titel,
  SinceLastMonth,
  revenue,
  icon,
  last4Digits,
  FirstName,
  LastName,
  year,
  month,
}) => (
  <Container height={height} width={width}>
    <CWapper>
      <CreaditCard
        height="14vw"
        width="26vw"
        last4Digits={last4Digits}
        FirstName={FirstName}
        LastName={LastName}
        month={month}
        year={year}
      />
    </CWapper>
    <Income width="25vw" height="20vh" />
    <SWapper>
      <Summary
        height="23vh"
        width="26vw"
        titel={titel}
        subtitel={subtitel}
        revenue={revenue}
        SinceLastMonth={SinceLastMonth}
        subtiteltwo={subtiteltwo}
        icon={icon}
      />
    </SWapper>
    <SWapper>
      <Summary
        height="23vh"
        width="26vw"
        titel={titel}
        subtitel={subtitel}
        revenue={revenue}
        SinceLastMonth={SinceLastMonth}
        subtiteltwo={subtiteltwo}
        icon={icon}
      />
    </SWapper>
    <ActivviyWapper>
      <Activity height="5vh" width="60vw" />
    </ActivviyWapper>
  </Container>
);

export default Main;
