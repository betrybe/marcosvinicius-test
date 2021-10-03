import { ActionType } from '../actions/wallet';

const INITIAL_STATE = {
  currencies: [],
  expenses: []
};

function wallet(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ActionType.ADD_ITEM_TO_WALLET: {
      const { data } = action.payload;
      const newPayload = {
        id: state.expenses.length ? Number(state.expenses.slice(-1)[0].id) + 1 : 0,
        ...data
      }
      return {
        ...state,
        currencies: [...state.currencies],
        expenses: [
          ...state.expenses,
          newPayload
        ]
      }
    }
    case ActionType.REMOVE_ITEM_TO_WALLET: {
      const { id } = action.payload;
      const findIndexExpense = state.expenses.findIndex(expense => expense.id === id)
      if (findIndexExpense < 0) {
        return {
          ...state
        }
      } else {
        state.expenses.splice(findIndexExpense, 1)
        return {
          ...state
        }
      }
    }
    case ActionType.UPDATE_ITEM_TO_WALLET: {
      const { id, data } = action.payload;
      // TODO
      return {
        ...state,
        currencies: [...state.currencies],
        data
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
