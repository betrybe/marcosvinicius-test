export const ActionType = {
  ADD_ITEM_TO_WALLET: '@ADD_ITEM_TO_WALLET',
  REMOVE_ITEM_TO_WALLET: '@REMOVE_ITEM_TO_WALLET',
  UPDATE_ITEM_TO_WALLET: '@UPDATE_ITEM_TO_WALLET',
  REQUEST_UPDATE_ITEM_TO_WALLET: '@REQUEST_UPDATE_ITEM_TO_WALLET',
  PUSH_CURRENCIES_TO_WALLET: '@PUSH_CURRENCIES_TO_WALLET',
  CALCULE_TOTAL_VALUE: '@CALCULE_TOTAL_VALUE'
}

export function addItemToWallet(data) {
  return {
    type: ActionType.ADD_ITEM_TO_WALLET,
    payload: {
      data
    }
  }
}

export function removeItemToWallet(id) {
  return {
    type: ActionType.REMOVE_ITEM_TO_WALLET,
    payload: {
      id
    }
  }
}

export function requestUpdateItemToWallet(id) {
  return {
    type: ActionType.REQUEST_UPDATE_ITEM_TO_WALLET,
    payload: {
      id
    }
  }
}

export function updateItemToWallet(id, data) {
  return {
    type: ActionType.UPDATE_ITEM_TO_WALLET,
    payload: {
      id,
      data
    }
  }
}

export function pushCurrenciesToWallet() {
  return {
    type: ActionType.PUSH_CURRENCIES_TO_WALLET
  }
}

export function calculeTotalValue(id, data) {
  return {
    type: ActionType.CALCULE_TOTAL_VALUE,
    payload: {
      id,
      data
    }
  }
}
