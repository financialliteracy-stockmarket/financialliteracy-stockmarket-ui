import React from 'react'
import PropTypes from 'prop-types';
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

const SideBarWatchList = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event, newTabIndex) => {
    setActiveTab(newTabIndex)
  }

  return (
    <Paper variant={'outlined'} square style={{
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'space-between',
      width: drawerWidth,
      height: '100%',
      position: 'fixed'
    }}>
      <TabPanel value={activeTab} index={0}>
        1
        <WatchList />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        2
        <WatchList />
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        3
        <WatchList />
      </TabPanel>
      <TabPanel value={activeTab} index={3}>
        4
        <WatchList />
      </TabPanel>
      <TabPanel value={activeTab} index={4}>
        5
        <WatchList />
      </TabPanel>

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

export default SideBarWatchList