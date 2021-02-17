import React from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import Icon from '../../atoms/IconImg/Icon';
import { Selects } from '../../../containers/enums/index';
import { ISummaryProps } from '../../../models/index';

const Container = styled.div<ISummaryProps>`
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 2fr;
`;
const RevenueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/3;
  padding-left: 25px;
`;
const LastMonthWrapper = styled.div`
  width: 25vw;
  padding-left: 25px;
`;
const IconWrapper = styled.div`
  grid-column: 2;
  grid-row: 3/4;
  padding: 0;
`;
const TitelWrapper = styled.div`
  grid-column: 1/3;
  padding-left: 25px;
  padding-top: 10px;
`;
const Summary: React.FC<ISummaryProps> = ({
  height,
  width,
  subtiteltwo,
  subtitel,
  titel,
  icon,
  revenue,
  SinceLastMonth,
}) => (
  <Container height={height} width={width}>
    <TitelWrapper>
      <Typography size={Selects.lg}>{titel}</Typography>
    </TitelWrapper>
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
  </Container>
);

export default Summary;
