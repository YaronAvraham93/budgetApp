import { ITransactionInitialState, IAction } from '../models/index';

const transactionReducer = (state: ITransactionInitialState, action: IAction) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload,
      };

    default:
      return state;
  }
};
export default transactionReducer;
