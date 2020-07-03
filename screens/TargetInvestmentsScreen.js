import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Picker,
  SafeAreaView,
} from "react-native";

// import components
import { PageTitle } from "../components/PageTitle";
import HorizontalSlider from "../components/HorizontalSlider";
import Accordion from "../components/Accordion";
import globalStyles from "../constants/globalStyles";
import Button from "../components/Button";
import fonts from "../constants/fonts";
import { ScrollView } from "react-native-gesture-handler";

import Strapi from "../api/Strapi";

export default class TargetInvestmentsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      index: 0,
      duration: 0,
      risk_profile: "",
      id: 1,
    };
  }

  // componentDidMount() {
  //   this.handleSubmit();
  // }

  // Handle data submitted
  async handleSubmit() {
    try {
      const response = await Strapi.get(
        "/opportunities?risk_profile=" + this.state.risk_profile
      );
      this.setState(response.data[0]);
      console.log(response.data);
    } catch (error) {
      console.log("Error");
    }
  }

  render() {
    const result = this.setState;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <PageTitle title="Target Investments" />
        {/* {result === 0 ? alert("Items found") : alert("not found")} */}
        <View style={styles.container}>
          <View style={styles.containerContent}>
            <Text style={styles.textHeading}>Enter investment amount</Text>
            <TextInput
              style={styles.inputStyle}
              keyboardType="numeric"
              value={this.state.amount}
              onChangeText={(newValue) => {
                this.setState({ amount: newValue });
              }}
            />
          </View>
          <View style={styles.containerSlider}>
            <Text style={[styles.textHeading, { marginTop: 20 }]}>
              Investment Time
            </Text>
            <View style={styles.sliderStyle}>
              <HorizontalSlider
                step={1}
                minimumValue={0}
                maximumValue={36}
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
          </View>
          <View style={styles.containerSlider}>
            <Text style={[styles.textHeading, { marginTop: 20 }]}>
              Success Index
            </Text>
            <View style={styles.sliderStyle}>
              <HorizontalSlider
                // inherit props from child
                step={1}
                minimumValue={0}
                maximumValue={38}
                unit="index"
                value={this.state.index}
                onValueChange={(slideValue) =>
                  this.setState({ index: slideValue })
                }
                minimumTrackTintColor="#003a8c"
                maximumTrackTintColor="#bae7ff"
                thumbTintColor="#003a8c"
              />
            </View>
          </View>
          <View style={styles.containerSlider}>
            <Text style={[styles.textHeading, { marginTop: 20 }]}>
              Risk Level
            </Text>
            <View style={styles.sliderStyle}>
              <Accordion
                // Inherit prop from child
                mode="dropdown"
                selectedValue={this.state.risk_profile}
                onValueChange={(itemValue) => {
                  this.setState({ risk_profile: itemValue });
                }}
              >
                <Picker.Item label="Low" value="low" />
                <Picker.Item label="Medium" value="medium" />
                <Picker.Item label="High" value="high" />
              </Accordion>
            </View>
          </View>
        </View>
        {/* <View style={styles.btnSearch}> */}
        {/* <Button
            body={<Text style={globalStyles.btnLabel}>No result</Text>}
            touchableStyleProps={{ backgroundColor: "#91d5ff" }}
            touchableProps={{
              onPress: () => {
                this.props.navigation.navigate("no-result");
              },
            }}
          /> */}
        {/* </View> */}
        <View style={styles.btnSearch}>
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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginRight: 5,
    marginLeft: 5,
  },
  containerContent: {
    margin: 5,
  },
  textHeading: {
    color: "#a28f8f",
    fontSize: fonts.large,
  },
  inputStyle: {
    backgroundColor: "#e6f7ff",
    height: 45,
    padding: 5,
    marginTop: 15,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#c5eaff",
  },
  containerSlider: {
    margin: 5,
  },
  sliderStyle: {
    marginTop: 10,
    marginRight: 25,
  },
  btnSearch: {
    marginTop: 50,
    marginRight: 5,
    marginLeft: 5,
  },
});
