import { ITransactionInitialState } from '../models/index';

interface IAction {
  type: string;
  payload: any;
}

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
