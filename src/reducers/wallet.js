import { ActionType } from '../actions/wallet';

const INITIAL_STATE = {
  currencies: [],
  expenses: []
};

function wallet(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ActionType.ADD_ITEM_TO_WALLET: {
      const { data } = action.payload;
      return {
        ...state,
        currencies: [...state.currencies],
        expenses: [
          ...state.expenses,
          data
        ]
      }
    }
    case ActionType.REMOVE_ITEM_TO_WALLET: {
      const stateFiltered = state.expenses.filter(id => id !== action.id)
      return {
        ...state,
        currencies: [...state.currencies],
        expenses: [stateFiltered]
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default wallet;
