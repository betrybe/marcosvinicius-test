import { ActionType } from '../actions/user';

const INITIAL_STATE = [];

function user(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ActionType.LOGIN: {
      console.log(ActionType.LOGIN)
      return state;
    }
    default: {
      return state;
    }
  }
}

export default user;
