import { ActionType } from '../actions/wallet';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isUpdated: false,
  expenseId: null
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
        ],
        isUpdated: false,
      }
    }
    case ActionType.REMOVE_ITEM_TO_WALLET: {
      const { id } = action.payload;
      const findIndexExpense = state.expenses.findIndex(expense => expense.id === id)
      if (findIndexExpense < 0) {
        return {
          ...state,
          isUpdated: false,
        }
      } else {
        state.expenses.splice(findIndexExpense, 1)
        return {
          ...state,
          isUpdated: false,
        }
      }
    }
    case ActionType.UPDATE_ITEM_TO_WALLET: {
      const { id, data } = action.payload;
      const index = state.expenses.findIndex(expense => expense.id === id);
      state.expenses[index] = {
        id,
        value: data.value,
        description: data.description,
        currency: data.currency,
        method: data.method,
        tag: data.tag,
        exchangeRates: data.exchangeRates
      }
      return {
        ...state,
        currencies: [...state.currencies],
        expenses: [...state.expenses],
        isUpdated: false,
      }
    }
    case ActionType.REQUEST_UPDATE_ITEM_TO_WALLET: {
      const { id } = action.payload;
      return {
        ...state,
        currencies: [...state.currencies],
        expenses: [...state.expenses],
        isUpdated: true,
        expenseId: id
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
