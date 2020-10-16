import React from 'react'
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer";

const StockEntry = (props) => {
  const { stock } = props;
  return (
    <div style={{
      borderBottom: '1px solid lightgray',
      padding: '5px', display: 'flex', justifyContent: 'space-between'
    }}>
      <span>
        <span>{stock.name}</span>
      </span>
      <span>
        <span>{stock.holdings}</span>
      </span>
      <span>
        <span>{stock.price}</span>
      </span>
    </div>
  )
}

export default StockEntry