import React from 'react'
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer";
import Icon from "@material-ui/core/Icon";
import PropTypes from 'prop-types'

const Holdings = ({ count }) => {
  return (
    <>
      <Icon fontSize="small">work_outline</Icon>
      <span>{count}</span>
    </>
  )
}

const StockEntry = (props) => {
  const { stock } = props;
  return (
    <div style={{
      borderBottom: '1px solid lightgray',
      padding: '5px', display: 'flex', justifyContent: 'space-between'
    }}>
      <div style={{ flexBasis: '60%' }}>
        <span style={{ fontWeight: 400 }}>{stock.name}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {stock.holdings > 0 && <Holdings count={stock.holdings} />}
      </div>
      <div>
        <span>{stock.price}</span>
      </div>
    </div >
  )
}

export default StockEntry