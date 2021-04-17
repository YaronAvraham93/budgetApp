import { IUserInitialState } from '../models/index';

interface IAction {
  type: string;
  payload: any;
}

const userReducer = (state: IUserInitialState, action: IAction) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
