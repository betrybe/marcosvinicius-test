import { ActionType } from '../actions/user';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ActionType.LOGIN: {
    return {
      ...state,
      email: action.email,
      logado: true,
    };
  }
  case ActionType.LOGOUT: {
    return {
      email: '',
      logado: false,
    };
  }
  default: {
    return state;
  }
  }
}

export default user;
