import React from 'react';
import styled from 'styled-components';
import Activity from '../../molecules/Activity/Activity';
import CreaditCard from '../../molecules/CreditCard/CreditCard';
import Income from '../../molecules/Income/Income';
import Summary from '../../molecules/Summary/Summary';
import { IMainProps } from '../../../models/index';

const Container = styled.div<IMainProps>`
  display: block;
  width: 66vw;
  height: 120vh;
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
  @media (max-width: 768px) {
    width: 88vw;
    height: 170vh;
  }
`;
const ActivviyWapper = styled.div`
  width: 68vw;
  display: flex;
  justify-content: center;
`;
const CWapper = styled.div`
  height: 44vh;
  width: 68vw;
  display: flex;
  padding-top: 15px;
  justify-content: space-around;
  flex-direction: row;
`;
const SWapper = styled.div`
  width: 69vw;
  height: 30vh;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
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
        width="23vw"
        last4Digits={last4Digits}
        FirstName={FirstName}
        LastName={LastName}
        month={month}
        year={year}
      />

      <Income width="25vw" height="19vw" />
    </CWapper>
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
      <Activity height="60vh" width="60vw" />
    </ActivviyWapper>
  </Container>
);

export default Main;
