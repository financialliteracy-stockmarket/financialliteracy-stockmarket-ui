import React from 'react'
import StockEntry from './StockEntry';

const WatchList = (props) => {
  const stocks = [
    { name: 'Reliance', price: 2200.24 },
    { name: 'SBIN', price: 123.34 },
    { name: 'YESBANK', price: 143.29 },
    { name: 'MARUTI', price: 6143.29 }
  ];
  return (
    <div style={{ fontSize: '0.85em' }}>
      {stocks.map(stock => <StockEntry key={stock.name} stock={stock} />)}
    </div>
  )
}

export default WatchList