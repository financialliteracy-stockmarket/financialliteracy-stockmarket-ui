export function addToWatchList(tab, stockEntry) {
  return {
    type: 'ADD_TO_WATCH_LIST',
    stockEntry
  }
}

export function removeFromWatchList(tab, stockEntry) {
  return {
    type: 'REMOVE_FROM_WATCH_LIST',
    stockEntry
  }
}