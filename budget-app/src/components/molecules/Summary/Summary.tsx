import React from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import Icon from '../../atoms/IconImg/Icon';
import { Selects } from '../../../containers/enums/index';
import { ISummaryProps } from '../../../models/index';

const SWrapper = styled.div`
  width: 60%;
  height: 100%;
  border: 2px solid black;
`;
const RevenueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  width: 42vw;
  border: 2px solid black;
`;
const LastMonthWrapper = styled.div`
  display: flex;
  width: 42vw;
  justify-content: space-evenly;
  justify-content: end;
  padding-top: 10px;
  border: 2px solid black;
`;
const IconWrapper = styled.div`
  display: flex;
  border: 2px solid black;
  justify-content: flex-end;
`;
const Summary: React.FC<ISummaryProps> = ({ subtiteltwo, subtitel, titel, icon, revenue, SinceLastMonth }) => (
  <SWrapper>
    {titel}
    <RevenueWrapper>
      <Typography size={Selects.sm} color="#bdbfbf">
        {subtitel}
      </Typography>
      <Typography size={Selects.lg} color="#0ee7e7">
        {revenue}
      </Typography>
    </RevenueWrapper>
    <LastMonthWrapper>
      <Typography size={Selects.md}>{SinceLastMonth}</Typography>
      <Typography size={Selects.md} color="#bdbfbf">
        {subtiteltwo}
      </Typography>
    </LastMonthWrapper>
    <IconWrapper>
      <Icon width="7vw" height="7vh" src={icon}>
        {' '}
      </Icon>
    </IconWrapper>
  </SWrapper>
);

export default Summary;
