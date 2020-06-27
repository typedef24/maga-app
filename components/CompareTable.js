import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import { ScrollView } from "react-native-gesture-handler";

import Font from "../constants/fonts";

export default class CompareTable extends React.Component {
  constructor(props) {
    super(props);

    const elementButton = (value) => (
      <TouchableOpacity
        onPress={() => alert("Header Clicked")}
        style={{
          flex: 1,
          backgroundColor: "#bae7ff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Text>Restuarant</Text>
        </View>
      </TouchableOpacity>
    );

    const elementHeader = (value) => (
      <TouchableOpacity
        onPress={() => alert("Header Clicked")}
        style={{
          flex: 1,
          backgroundColor: "#bae7ff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Text>ShopMarket</Text>
        </View>
      </TouchableOpacity>
    );

    this.state = {
      HeadTable: ["Factor", elementButton("1"), elementHeader("1")],
      DataTable: [
        ["ROI", "13.6%", "14.6%"],
        ["INDUSTRY", "40 months", "40 months"],
        ["S. INDEX", "Technology", "Education"],
        ["TARGET", "7.6", ""],
        ["INVESTORS", "$350K", "b"],
        ["B. PENALTY", "15%", "18%"],
        ["B. TIME", "10 months", "2 months"],
        ["DEADLINE", "", "3/7/2020"],
        ["TYPE", "Fixed", "Variable"],
        ["LIFETIME", "22 months", ""],
      ],
    };
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
