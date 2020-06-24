import React from "react";
import { View, Text, StyleSheet, Picker } from "react-native";

import font from "../constants/fonts";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import HorizontalSlider from "../components/HorizontalSlider";
import Accordion from "../components/Accordion";
import Layout from "../constants/Layout";
import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";

export default class FilterResultsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateExample: "",
      industry: "",
      duration: 0,
      roi: "",
      fund: "",
      price: "",
    };
  }

  // Apply filter
  handleFilter() {
    alert("Data " + JSON.stringify(this.state));
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
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
          <Text style={styles.textHeading}>Return on investment</Text>
          <HorizontalSlider
            step={1}
            minimumValue={0}
            maximumValue={12}
            unit="months"
            value={this.state.duration}
            onValueChange={(slideValue) =>
              this.setState({ duration: slideValue })
            }
            minimumTrackTintColor="#003a8c"
            maximumTrackTintColor="#bae7ff"
            thumbTintColor="#003a8c"
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.textHeading}>Select Industry</Text>
          <Accordion
            // Inherit prop from child
            mode="dropdown"
            selectedValue={this.state.risk}
            onValueChange={(itemValue) => {
              this.setState({ risk: itemValue });
            }}
          >
            <Picker.Item label="Industry1" value="Industry1" />
            <Picker.Item label="Industry2" value="Industry2" />
            <Picker.Item label="Industry3" value="Industry3" />
          </Accordion>
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
        <View style={styles.btnStyle}>
          <Button
            body={
              <Text style={globalStyles.btnLabel}>Suggest Investments</Text>
            }
            touchableStyleProps={{ backgroundColor: "#52c41a" }}
            touchableProps={{
              onPress: () => {
                this.handleSubmit();
              },
            }}
          />
        </View>
      </ScrollView>
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
  btnStyle: {
    marginTop: 50,
    marginRight: 5,
    marginLeft: 5,
  },
});
