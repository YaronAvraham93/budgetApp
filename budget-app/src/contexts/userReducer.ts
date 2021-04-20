import { IUserInitialState, IAction } from '../models/index';
import { ActionType } from '../containers/enums/index';

const userReducer = (state: IUserInitialState, action: IAction) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
