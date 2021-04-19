import { IUserInitialState, IAction } from '../models/index';

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
