import { ICurrency, IAction } from '../../models/index';
import { ActionType } from '../../containers/enums/index';

const currencyReducer = (state: ICurrency, action: IAction) => {
  switch (action.type) {
    case ActionType.SET_CURRECNY:
      return {
        ...state,
        selectedCurrency: action.payload,
      };
    case ActionType.SET_CURRENCY_RATE:
      return {
        ...state,
        currencyRate: action.payload,
      };

    default:
      return state;
  }
};

export default currencyReducer;
