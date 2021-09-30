export const ActionType = {
  LOGIN: '@LOGIN',
  LOGOUT: '@LOGOUT',
}

export function userLogin(email) {
  return {
    type: ActionType.LOGIN,
    email
  }
}

export function userLogout(payload) {
  return {
    type: ActionType.LOGIN,
    payload
  }
}
