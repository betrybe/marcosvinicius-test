import { ActionType } from '../actions/wallet';
import { distinct } from '../utils/distinct'

const INITIAL_STATE = {
  currencies: [],
  expenses: []
};

function wallet(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ActionType.ADD_ITEM_TO_WALLET: {
      const { data } = action.payload;

      // const currencies = []
      // for(let item of Object.entries(data.exchangeRates)) {
      //   currencies.push(item[1]);
      // }

      // const currenciesNotDuplicated = currencies.filter(distinct);

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


      // for (const expense of data.exchangeRates) {
      //   for (const [_, value] of Object.entries(expense.exchangeRates)) {
          // if (expense.currency === value.code) {
          //   currencies.push({
          //     key: expense.currency,
          //     name: value.name,
          //     info: value,
          //   })
          //   break
          // }
      //   }
      // }
      // if (state.expenses.length > 0) {

      // } else {
      //   const [_, value] = Object.entries(data.exchangeRates)
      //   // console.log('>>>>>>>>>>value', value)
      //   // const currencie = {
      //   //   key: data.currency,
      //   //   name: value[1].name,
      //   //   info: value[1]
      //   // }

      //   console.log('value', value)

      //   const newPayload = {
      //     id: 0,
      //     ...data
      //   }

      //   return {
      //     ...state,
      //     currencies: [
      //       ...state.currencies,
      //       value
      //     ],
      //     expenses: [
      //       ...state.expenses,
      //       newPayload
      //     ]
      //   }
      // }
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
