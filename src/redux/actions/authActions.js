export function doLogin(authData) {
  return {
    type: 'DO_LOGIN',
    authData
  }
}

export function doLogout() {
  return {
    type: 'DO_LOGOUT'
  }
}