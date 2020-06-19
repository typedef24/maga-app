import React from "react";
import { View, Text, StyleSheet } from "react-native";

import font from "../constants/fonts";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Accordion } from "../components/Accordion";
import Layout from "../constants/Layout";

export default class FilterResultsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateExample: "",
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headerText}>
          <TouchableOpacity onPress={() => navigation.navigate("no-result")}>
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.textStyle}>Filter</Text>
          <TouchableOpacity>
            <Text style={styles.textStyle}>Reset</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            onPress={() => this.setState({ stateExample: "Low risk" })}
          >
            <View
              style={
                this.state.stateExample == "Low risk"
                  ? styles.chooseItem
                  : styles.chooseItem1
              }
            >
              <Text style={styles.choosetxt}>Low risk</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ stateExample: "Medium" })}
          >
            <View
              style={
                this.state.stateExample == "Medium"
                  ? styles.chooseItem
                  : styles.chooseItem1
              }
            >
              <Text style={styles.choosetxt}>Medium</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({ stateExample: "High risk" })}
          >
            <View
              style={
                this.state.stateExample == "High risk"
                  ? styles.chooseItem
                  : styles.chooseItem1
              }
            >
              <Text style={styles.choosetxt}>High risk</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.textHeading}>Select Industry</Text>
          <Accordion label1="Industry1" label2="Industry2" label3="Industry3" />
        </View>
        <View style={styles.section}>
          <Text style={styles.textHeading}>Funding mood</Text>
          <View style={styles.selectBox}>
            <TouchableOpacity
              onPress={() => this.setState({ stateExample: "Fixed" })}
            >
              <View
                style={
                  this.state.stateExample == "Fixed"
                    ? styles.selectBox1
                    : styles.selectBox2
                }
              >
                <Text style={styles.choosetxt}>Fixed</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ stateExample: "Variable" })}
            >
              <View
                style={
                  this.state.stateExample == "Variable"
                    ? styles.selectBox1
                    : styles.selectBox2
                }
              >
                <Text style={styles.choosetxt}>High risk</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.textHeading}>Price Range</Text>
          <View style={styles.selectBox}>
            <TouchableOpacity
              onPress={() => this.setState({ stateExample: 200 })}
            >
              <View
                style={
                  this.state.stateExample == 200
                    ? styles.selectBox1
                    : styles.selectBox2
                }
              >
                <Text style={styles.choosetxt}>{"$"}200</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ stateExample: 80000 })}
            >
              <View
                style={
                  this.state.stateExample == 80000
                    ? styles.selectBox1
                    : styles.selectBox2
                }
              >
                <Text style={styles.choosetxt}>{"$"}80,000</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
  },
  headerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  textStyle: {
    fontSize: font.large,
    fontWeight: "900",
  },
  contentContainer: {
    borderTopColor: "#033c8d",
    borderTopWidth: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  chooseItem: {
    backgroundColor: "#e6f7ff",
    borderWidth: 3,
    borderColor: "#4daaff",
    width: 100,
    alignItems: "center",
    height: 50,
    margin: 10,
  },

  chooseItem1: {
    backgroundColor: "#e6f7ff",
    borderWidth: 2,
    borderColor: "#bfe9ff",
    width: 100,
    alignItems: "center",
    height: 50,
    margin: 10,
  },
  choosetxt: {
    fontSize: font.large,
    color: "#a28f8f",
    textAlign: "center",
    padding: 5,
  },
  selectBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectBox1: {
    backgroundColor: "#e6f7ff",
    borderWidth: 3,
    borderColor: "#4daaff",
    width: Layout.window.width * 0.5,
    alignItems: "center",
    height: 50,
  },
  selectBox2: {
    backgroundColor: "#e6f7ff",
    borderWidth: 2,
    borderColor: "#bfe9ff",
    width: Layout.window.width * 0.4,
    alignItems: "center",
    height: 50,
  },
  textHeading: {
    fontSize: font.large,
    color: "#a28f8f",
    fontWeight: "bold",
    paddingBottom: 10,
  },
  section: {
    margin: 10,
  },
});
