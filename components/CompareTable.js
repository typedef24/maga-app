import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Table, TableWrapper, Row, Rows } from "react-native-table-component";

import Font from "../constants/fonts";

export default class CompareTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: this.getTableColumnHeads(),
      DataTable: this.getTableRows(),
    };
  }

  getTableRows() {
    let tableRowsArray = [];
    //initialize arrays that represent a row of the table
    let initialStatusArray = ["Status"];
    let statusArray = [];
    let initialRateArray = ["Rate"];
    let rateArray = [];
    let initialDurationArray = ['Duration'];
    let durationArray = [];
    let initialPriceArray = ['Price'];
    let priceArray = [];
    let initialInceptionDateArray = ['Inception Date'];
    let inceptionDateArray = [];
    let initialObjectiveArray = ['Objective'];
    let objectiveArray = [];
    let initialRiskProfileArray = ['Risk Profile'];
    let riskProfileArray = [];
    let initialExpenseRatioArray = ['Expense Ratio'];
    let expenseRatioArray = [];
    let initialFundStartedArray = ['Fund Started'];
    let fundStartedArray = [];
    let compareArray = this.props.compareArray;
    for (let index = 0; index < compareArray.length; index++) {
      //add new item to each array
      statusArray.push(compareArray[index].status);
      rateArray.push(compareArray[index].rate);
      durationArray.push(compareArray[index].duration + " Months");
      priceArray.push(compareArray[index].price + " USD");
      inceptionDateArray.push(compareArray[index].inception_date);
      objectiveArray.push(compareArray[index].objective);
      riskProfileArray.push(compareArray[index].risk_profile);
      expenseRatioArray.push(compareArray[index].expense_ratio);
      fundStartedArray.push(compareArray[index].fund_started);
    }
    //concate arrays with their initials and add the result to the tableRowsArray
    tableRowsArray.push(initialStatusArray.concat(statusArray));
    tableRowsArray.push(initialRateArray.concat(rateArray));
    tableRowsArray.push(initialDurationArray.concat(durationArray));
    tableRowsArray.push(initialPriceArray.concat(priceArray));
    tableRowsArray.push(initialInceptionDateArray.concat(inceptionDateArray));
    tableRowsArray.push(initialObjectiveArray.concat(objectiveArray));
    tableRowsArray.push(initialRiskProfileArray.concat(riskProfileArray));
    tableRowsArray.push(initialExpenseRatioArray.concat(expenseRatioArray));
    tableRowsArray.push(initialFundStartedArray.concat(fundStartedArray));
    //return tableRowsArray wh is the final array to b used in the table
    return tableRowsArray;
  }

  getTableColumnHeads() {
    let initialArray = ["Factor"];
    let tableColumnHeads = [];
    let compareArray = this.props.compareArray;
    for (let index = 0; index < compareArray.length; index++) {
      const tableColumnHeadView = (
        <View
          style={{
            flex: 1,
            backgroundColor: "#bae7ff"
          }}
        >
          <Text>{compareArray[index].title}</Text>
        </View>
      );
      tableColumnHeads.push(tableColumnHeadView); //add new item to tempCompareArray
    }
    return initialArray.concat(tableColumnHeads);
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Table borderStyle={{ borderWidth: 1, borderColor: "#f5f5f5" }}>
            <TableWrapper>
              <Row
                data={state.HeadTable}
                style={styles.HeadStyle}
                textStyle={[
                  styles.TableText,
                  { fontSize: Font.medium, color: "white", fontWeight: "bold" },
                ]}
              />
            </TableWrapper>
            <Rows data={state.DataTable} textStyle={styles.TableText} />
          </Table>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  HeadStyle: {
    backgroundColor: "#1890ff",
  },
  TableText: {
    margin: 10,
  },
});
