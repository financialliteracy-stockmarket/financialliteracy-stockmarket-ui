import React from 'react'
import StockEntry from './StockEntry'

const WatchList = (props) => {
  const stocks = props.stocks || [];
  return (
    <div style={{ fontSize: '0.85em' }}>
      {stocks.map(stock => <StockEntry key={stock.name} stock={stock} />)}
    </div>
  )
}

export default WatchList