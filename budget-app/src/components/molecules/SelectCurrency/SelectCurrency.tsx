import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { CurrencyContext } from '../../../contexts/currencyContext';
import { ICurrencyRowProps } from '../../../models';
import theme from '../../../style/theme/theme';

const { breakpoints, colors } = theme;
const Container = styled.div`
  height: 73%;
  width: 100%;
  margin-bottom: 4px;
  display: flex;
  align-items: flex-end;
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
const SSelect = styled.select`
  background-color: ${colors.purple.darkPurple};
  color: white;
  padding: 12px;
  width: 250px;
  border: none;
  font-size: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  outline: none;
  cursor: pointer;
`;

const SelectCurrency: FC<ICurrencyRowProps> = () => {
  const { setSelectCurrency, currencyRate } = useContext(CurrencyContext);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectCurrency(value);
  };

  return (
    <Container>
      <SSelect onChange={onChange}>
        {Object.keys(currencyRate).map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SSelect>
    </Container>
  );
};

export default SelectCurrency;
