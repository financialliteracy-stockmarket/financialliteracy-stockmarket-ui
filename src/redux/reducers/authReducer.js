const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'DO_LOGIN':
      return {
        ...action.authData
      }
    case 'DO_LOGOUT':
      return {
        ...state,
        auth: undefined
      }
    default:
      return state;
  }
}

export default authReducer