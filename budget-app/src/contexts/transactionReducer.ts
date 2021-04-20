import { ITransactionInitialState, IAction } from '../models/index';
import { ActionType } from '../containers/enums/index';

const transactionReducer = (state: ITransactionInitialState, action: IAction) => {
  switch (action.type) {
    case ActionType.SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };

    default:
      return state;
  }
};
export default transactionReducer;
