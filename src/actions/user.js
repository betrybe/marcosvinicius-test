export const ActionType = {
  LOGIN: '@LOGIN',
  LOGOUT: '@LOGOUT',
}

export function userLogin(payload) {
  return {
    type: ActionType.LOGIN,
    payload
  }
}

export function userLogout(payload) {
  return {
    type: ActionType.LOGIN,
    payload
  }
}
