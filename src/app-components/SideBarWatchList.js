import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import WatchList from './WatchList';

import {
  drawerWidth
} from "assets/jss/material-dashboard-react.js";

// import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const SideBarWatchList = (props) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event, newTabIndex) => {
    setActiveTab(newTabIndex)
  }

  const addStockToList = (tabInd, event) => {
    props.addToWatchList(tabInd, { name: "HDFCBANK", price: 1200.45, holdings: 100 });
  }
  const stocks = [...props.watchLists];

  return (
    <Paper variant={'outlined'} square style={{
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'space-between',
      width: drawerWidth,
      height: '100%',
      position: 'fixed'
    }}>
      <div style={{ overflow: 'auto' }}>
        <TabPanel value={activeTab} index={0}>
          <button onClick={(event) => addStockToList(0, event)} >Add</button>
          <WatchList stocks={stocks[0]} />
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          <button onClick={(event) => addStockToList(1, event)} >Add</button>
          <WatchList stocks={stocks[1]} />
        </TabPanel>
        <TabPanel value={activeTab} index={2}>
          <button onClick={(event) => addStockToList(2, event)} >Add</button>
          <WatchList stocks={stocks[2]} />
        </TabPanel>
        <TabPanel value={activeTab} index={3}>
          <button onClick={(event) => addStockToList(3, event)} >Add</button>
          <WatchList stocks={stocks[3]} />
        </TabPanel>
        <TabPanel value={activeTab} index={4}>
          <button onClick={(event) => addStockToList(4, event)} >Add</button>
          <WatchList stocks={stocks[4]} />
        </TabPanel>
      </div>
      <Tabs
        value={activeTab}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="1" style={{ minWidth: 'auto' }} />
        <Tab label="2" style={{ minWidth: 'auto' }} />
        <Tab label="3" style={{ minWidth: 'auto' }} />
        <Tab label="4" style={{ minWidth: 'auto' }} />
        <Tab label="5" style={{ minWidth: 'auto' }} />
      </Tabs>

    </Paper>
  )
}


const mapStateToProps = state => ({ watchLists: [...state.watchLists] });

const mapDispatchToProps = dispatch => ({
  addToWatchList: (tab, stockEntry) =>
    dispatch({ type: 'ADD_TO_WATCH_LIST', tab: tab, entry: stockEntry }),

  removeFromWatchList: (tab, stockEntry) =>
    dispatch({ type: 'REMOVE_FROM_WATCH_LIST', tab: tab, entry: stockEntry })
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBarWatchList)