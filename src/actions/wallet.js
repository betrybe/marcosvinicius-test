export const ActionType = {
  ADD_ITEM_TO_WALLET: '@ADD_ITEM_TO_WALLET',
  REMOVE_ITEM_TO_WALLET: '@REMOVE_ITEM_TO_WALLET',
  UPDATE_ITEM_TO_WALLET: '@UPDATE_ITEM_TO_WALLET'
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
export function updateItemToWallet(id, data) {
  return {
    type: ActionType.UPDATE_ITEM_TO_WALLET,
    payload: {
      id,
      data
    }
  }
}
