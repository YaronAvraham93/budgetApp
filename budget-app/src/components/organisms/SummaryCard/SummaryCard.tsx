import React from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import Icon from '../../atoms/IconImg/Icon';
import { SelectSize } from '../../../containers/enums/index';
import { ISummaryCard } from '../../../models/index';
import theme from '../../../style/theme/theme';

const { breakpoints, colors } = theme;
const Container = styled.div`
  height: 76%;
  width: 38%;
  display: grid;
  padding-left: 15px;
  padding-top: 10px;
  border-radius: 25px;
  grid-template-columns: 1fr 1fr;
  box-shadow: rgba(149, 157, 165, 70) 0px 8px 24px;
  @media (max-width: ${breakpoints.tablet}) {
    width: 95%;
    height: 58%;
    margin-bottom: 40px;
  }
`;

const RevenueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/3;
  @media (max-width: ${breakpoints.tablet}) {
    justify-content: space-between;
    height: 40%;
  }
`;
const LastMonthWrapper = styled.div`
  width: 100%;
  @media (max-width: ${breakpoints.tablet}) {
    width: 72%;
  }
`;

const IconWrapper = styled.div`
  width: 39%;
  height: 67%;
  padding-left: 65px;
  padding-bottom: 25px;
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 23%;
    padding-left: 136px;
  }
`;
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
      <Typography size={SelectSize.sm} color={colors.gray.lightGray}>
        {subtitle}
      </Typography>
      <Typography size={SelectSize.md} color={colors.azure.mediumAzure}>
        {revenue}
      </Typography>
    </RevenueWrapper>
    <LastMonthWrapper>
      <Typography size={SelectSize.sm}>{sinceLastMonth}</Typography>
      <Typography size={SelectSize.sm} color={colors.gray.lightGray}>
        {subtiteltwo}
      </Typography>
    </LastMonthWrapper>
    <IconWrapper>
      <Icon icon={icon || 'check'} color="white" width="100%" height="90%" backgroundColor={backgroundColor} />
    </IconWrapper>
  </Container>
);

export default SummaryCard;
