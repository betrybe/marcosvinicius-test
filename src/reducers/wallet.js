import { ActionType } from '../actions/wallet';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalValue: 0.0,
  isUpdated: false,
  expenseId: null,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ActionType.ADD_ITEM_TO_WALLET: {
    const { data } = action.payload;
    const newPayload = {
      id: state.expenses.length
        ? Number(state.expenses.slice(-1)[0].id) + 1 : 0,
      ...data,
    };

    return {
      ...state,
      currencies: [...state.currencies],
      expenses: [
        ...state.expenses,
        newPayload,
      ],
      isUpdated: false,
    };
  }
  case ActionType.REMOVE_ITEM_TO_WALLET: {
    const { id } = action.payload;
    const findIndexExpense = state.expenses.findIndex((expense) => expense.id === id);
    if (findIndexExpense < 0) {
      return {
        ...state,
        isUpdated: false,
      };
    }
    state.expenses.splice(findIndexExpense, 1);
    if (state.expenses.length === 0) {
      return {
        ...state,
        totalValue: 0,
        isUpdated: false,
      };
    }
    return {
      ...state,
      isUpdated: false,
    };
  }
  case ActionType.UPDATE_ITEM_TO_WALLET: {
    const { id, data } = action.payload;
    const index = state.expenses.findIndex((expense) => expense.id === id);
    state.expenses[index] = {
      id,
      value: data.value,
      description: data.description,
      currency: data.currency,
      method: data.method,
      tag: data.tag,
      exchangeRates: data.exchangeRates,
    };
    return {
      ...state,
      currencies: [...state.currencies],
      expenses: [...state.expenses],
      isUpdated: false,
    };
  }
  case ActionType.REQUEST_UPDATE_ITEM_TO_WALLET: {
    const { id } = action.payload;
    return {
      ...state,
      currencies: [...state.currencies],
      expenses: [...state.expenses],
      isUpdated: true,
      expenseId: id,
    };
  }
  case ActionType.PUSH_CURRENCIES_TO_WALLET: {
    const currenciesFiltred = action.payload.data.filter((c) => c.codein !== 'BRLT');
    return {
      ...state,
      currencies: currenciesFiltred,
    };
  }
  case ActionType.CALCULE_TOTAL_VALUE: {
    if (action.payload.data && state.expenses.length !== 0) {
      const totalValue = state.expenses.reduce((previousValue, currentValue) => {
        const { value, currency } = currentValue;
        const exchangeValue = state.currencies.find((c) => c.code === currency);
        const convertedValue = exchangeValue
          && Number(value) * Number(exchangeValue.ask);
        return convertedValue + previousValue;
      }, 0);

      return {
        ...state,
        totalValue: Number(totalValue).toFixed(2),
      };
    }

    if (action.payload.id && !action.payload.data) {
      const totalValue = state.expenses.reduce((previousValue, currentValue) => {
        const { value, currency } = currentValue;
        const exchangeValue = state.currencies.find((c) => c.code === currency);
        const convertedValue = Number(value) * exchangeValue.ask;
        return convertedValue + previousValue;
      }, 0);
      return {
        ...state,
        totalValue: Number(totalValue).toFixed(2),
      };
    }
    return {
      ...state,
    };
  }
  default: {
    return {
      ...state,
    };
  }
  }
}

export default wallet;
