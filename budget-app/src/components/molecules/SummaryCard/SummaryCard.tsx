import React from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import Icon from '../../atoms/IconImg/Icon';
import { Selects } from '../../../containers/enums/index';
import { ISummaryCardProps } from '../../../models/index';

const Container = styled.div<ISummaryCardProps>`
  height: 23vh;
  width: 26vw;
  display: grid;
  padding-left: 15px;
  padding-top: 10px;
  border-radius: 25px;
  grid-template-columns: 1fr 1fr;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const RevenueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/3;
`;
const LastMonthWrapper = styled.div`
  width: 15w;
`;
const IconWrapper = styled.div`
  grid-column: 2;
`;
const TitlelWrapper = styled.div`
  grid-column: 1/3;
`;
const SummaryCard: React.FC<ISummaryCardProps> = ({ subtiteltwo, subtitle, title, icon, revenue, sinceLastMonth }) => (
  <Container>
    <TitlelWrapper>
      <Typography size={Selects.md}>{title}</Typography>
    </TitlelWrapper>
    <RevenueWrapper>
      <Typography size={Selects.sm} color="#bdbfbf">
        {subtitle}
      </Typography>
      <Typography size={Selects.md} color="#0ee7e7">
        {revenue}
      </Typography>
    </RevenueWrapper>
    <LastMonthWrapper>
      <Typography size={Selects.sm}>{sinceLastMonth}</Typography>
      <Typography size={Selects.sm} color="#bdbfbf">
        {subtiteltwo}
      </Typography>
    </LastMonthWrapper>
    <IconWrapper>
      <Icon width="7vw" height="7vh" src={icon} />
    </IconWrapper>
  </Container>
);

export default SummaryCard;
