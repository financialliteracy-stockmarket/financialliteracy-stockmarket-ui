import React from 'react'

import { makeStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Table from "components/Table/Table.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const PortifolioTable = (props) => {
  const classes = useStyles();
  const stockData = [
    ["ADANIPORTS", "", "12", "338", "347.85", "4,056.00", "7.36%"],
    ["ADANIPORTS", "", "12", "338", "347.85", "4,056.00", "7.36%"],
    ["ADANIPORTS", "", "12", "338", "347.85", "4,056.00", "7.36%"],
    ["ADANIPORTS", "", "12", "338", "347.85", "4,056.00", "7.36%"],
    ["ADANIPORTS", "", "12", "338", "347.85", "4,056.00", "7.36%"],
    ["ADANIPORTS", "", "12", "338", "347.85", "4,056.00", "7.36%"],
    ["ADANIPORTS", "", "12", "338", "347.85", "4,056.00", "7.36%"],
    ["ADANIPORTS", "", "12", "338", "347.85", "4,056.00", "7.36%"],
    ["ADANIPORTS", "", "12", "338", "347.85", "4,056.00", "7.36%"],
    ["ADANIPORTS", "", "12", "338", "347.85", "4,056.00", "7.36%"],
  ];
  return (
    <div>
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>My Portfolio</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["Stock Name", "M.Cap", "Qty", "Avg Price", "LTP",
                  "Invested Val", "Weight"]}
                tableData={stockData}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )

}

export default PortifolioTable