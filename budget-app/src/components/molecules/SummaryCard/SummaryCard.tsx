import React from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import Icon from '../../atoms/IconImg/Icon';
import { SelectSize } from '../../../containers/enums/index';
import { ISummaryCardProps } from '../../../models/index';

const Container = styled.div<ISummaryCardProps>(
  ({ theme }) => `
  height: 23vh;
  width: 26vw;
  display: grid;
  padding-left: 15px;
  padding-top: 10px;
  border-radius: 25px;
  grid-template-columns: 1fr 1fr;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 60vw;
    height: 35vh;
  }
`
);
const RevenueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/3;
`;
const LastMonthWrapper = styled.div(
  ({ theme }) => `
  width: 15w;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 33vw;
  }
`
);
const IconWrapper = styled.div(
  ({ theme }) => `
  grid-column: 2;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 9vw;
  }
`
);
const TitlelWrapper = styled.div`
  grid-column: 1/3;
`;
const SummaryCard: React.FC<ISummaryCardProps> = ({ subtiteltwo, subtitle, title, icon, revenue, sinceLastMonth }) => (
  <Container>
    <TitlelWrapper>
      <Typography size={SelectSize.md}>{title}</Typography>
    </TitlelWrapper>
    <RevenueWrapper>
      <Typography size={SelectSize.sm} color="#bdbfbf">
        {subtitle}
      </Typography>
      <Typography size={SelectSize.md} color="#0ee7e7">
        {revenue}
      </Typography>
    </RevenueWrapper>
    <LastMonthWrapper>
      <Typography size={SelectSize.sm}>{sinceLastMonth}</Typography>
      <Typography size={SelectSize.sm} color="#bdbfbf">
        {subtiteltwo}
      </Typography>
    </LastMonthWrapper>
    <IconWrapper>
      <Icon width="7vw" height="7vh" src={icon} />
    </IconWrapper>
  </Container>
);

export default SummaryCard;
