// watch list reducer focus on "watchLists" property of state
const watchlist2Reducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_WATCH_LIST':
      const ind = action.tab;
      const watchList = [...state[ind], { ...action.entry }];
      if (ind === 0) {
        state = [
          watchList,
          ...state.slice(1, state.length)
        ]
      } else if (ind + 1 === state.length) {
        state = [
          ...state.slice(0, state.length - 1),
          watchList
        ]
      } else {
        state = [
          ...state.slice(0, ind),
          watchList,
          ...state.slice(ind + 1, state.length),
        ]
      }
      return state;
    case 'REMOVE_FROM_WATCH_LIST':
      return state;
    default:
      return state;
  }
}

export default watchlist2Reducers