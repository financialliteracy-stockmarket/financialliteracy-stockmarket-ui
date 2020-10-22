import { combineReducers } from 'redux'
import auth from './authReducer'
import watchLists from './watchlistReducers'

export default combineReducers({
  auth,
  watchLists
})

// export default watchLists