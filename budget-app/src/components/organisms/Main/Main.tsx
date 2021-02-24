import React from 'react';
import styled from 'styled-components';
import Activity from '../../molecules/Activity/ActivitesChart';
import CreaditCard from '../../molecules/CreditCard/CreditCard';
import Income from '../../molecules/Income/Income';
import SummaryCard from '../../molecules/SummaryCard/SummaryCard';
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
      <CreaditCard last4Digits={last4Digits} firstName={FirstName} lastName={LastName} month={month} year={year} />

      <Income />
    </CWapper>
    <SWapper>
      <SummaryCard
        title={titel}
        subtitle={subtitel}
        revenue={revenue}
        sinceLastMonth={SinceLastMonth}
        subtiteltwo={subtiteltwo}
        icon={icon}
      />
      <SummaryCard
        title={titel}
        subtitle={subtitel}
        revenue={revenue}
        sinceLastMonth={SinceLastMonth}
        subtiteltwo={subtiteltwo}
        icon={icon}
      />
    </SWapper>
    <ActivviyWapper>
      <Activity />
    </ActivviyWapper>
  </Container>
);

export default Main;
