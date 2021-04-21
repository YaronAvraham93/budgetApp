import React from 'react';
import styled from 'styled-components';
import Typography from '../../../components/atoms/Typography/Typography';
import Icon from '../../../components/atoms/IconImg/Icon';
import { SelectSize } from '../../../containers/enums/index';
import { ISummaryCard } from '../../../models/index';
import theme from '../../../style/theme/theme';

const Container = styled.div(
  () => `
  height: 76%;
  width: 38%;
  display: grid;
  padding-left: 15px;
  padding-top: 10px;
  border-radius: 25px;
  grid-template-columns: 1fr 1fr;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 60%;
    height: 35%;
  }
`
);
const RevenueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/3;
`;

const LastMonthWrapper = styled.div(
  () => `
  width: 15vw;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 33%;
  }
`
);
const IconWrapper = styled.div(
  () => `
  grid-column: 2;
  padding-left: 75px;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 9%;
  }
`
);
const TitlelWrapper = styled.div`
  grid-column: 1/3;
`;
const SummaryCard: React.FC<ISummaryCard> = ({
  backgroundColor,
  icon,
  subtiteltwo,
  subtitle,
  title,
  revenue,
  sinceLastMonth,
}) => (
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
      <Icon icon={icon || 'check'} color="white" width="4vw" height="7vh" backgroundColor={backgroundColor} />
    </IconWrapper>
  </Container>
);

export default SummaryCard;
