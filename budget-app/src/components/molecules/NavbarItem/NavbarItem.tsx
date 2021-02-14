import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/IconImg/Icon';
import Typography from '../../atoms/Typography/Typography';
import { Selects } from '../../../containers/enums/index';

const SWrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;
export default function SidebarNavItem() {
  return (
    <SWrapper>
      <Icon
        height="2vh"
        width="2vw"
        src="https://img.favpng.com/3/8/12/email-logo-icon-png-favpng-158EyDT9NQ1jfdXbwDdzD6ns6.jpg"
      />
      <Typography size={Selects.sm}> hello</Typography>
    </SWrapper>
  );
}
