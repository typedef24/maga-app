import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import { List, Divider } from "react-native-paper";
import Icon from "@expo/vector-icons/FontAwesome";

import Image1 from "../assets/images/investment.png";
import Layout from "../constants/Layout";
import { ScrollView } from "react-native-gesture-handler";
import ProgressBarComponent from "../components/ProgressBarComponent";
import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";
import Font from "../constants/fonts";

export default class DetailsInvestmentScreen extends Component {
  state = {
    expanded: true,
  };

  _handlePress = () =>
    this.state({
      expanded: !this.state.expanded,
    });

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        {Platform.OS === "android" && (
          <StatusBar backgroundColor="#fffcfc" barStyle="dark-content" />
        )}
        {/* FIrst section */}
        <View style={[styles.container, styles.shadowStyle]}>
          <View style={{ backgroundColor: "#F4FBFF" }}>
            <View style={{ flex: 1 }}>
              <View style={styles.statusRow}>
                <Text style={styles.statusText}>Onging</Text>
              </View>
              {/* <ModalComponent style={{ flex: 1, zIndex: 4 }} /> */}
            </View>
            <View style={styles.body}>
              <Text style={{ width: Layout.window.width * 0.82 }}>
                Real estate investments funds in the dubai, los Angeles, new
                York and sub-saharan Africa.
              </Text>
              <Image source={Image1} style={styles.Image}></Image>
            </View>
          </View>
          <View style={styles.statistics}>
            <View style={styles.iconText}>
              <Icon
                name="line-chart"
                size={20}
                color="#fff"
                style={{ padding: 4 }}
              />
              <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>
                {" "}
                20.5{"%"}
              </Text>
            </View>
            <View style={styles.iconText}>
              <Icon
                name="calendar"
                size={20}
                color="#fff"
                style={{ padding: 4 }}
              />
              <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>
                {" "}
                6 {"Days ago"}
              </Text>
            </View>
            <View style={styles.iconText}>
              <Icon
                name="money"
                size={20}
                color="#fff"
                style={{ padding: 4 }}
              />
              <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>
                {" "}
                {"$"}4,300
              </Text>
            </View>
          </View>
          <View style={styles.description}>
            <Text style={{ paddingBottom: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </Text>
            <Divider color="red" />
            <List.Section style={styles.accordianContainer}>
              <List.Accordion
                title="Support Documents"
                titleStyle={{ fontSize: Font.large, fontWeight: "bold" }}
              >
                <View style={styles.fileDisplay}>
                  <View>
                    <Image source={require("../assets/images/xls.png")} />
                    <Text>daatash...</Text>
                  </View>
                  <View>
                    <Image source={require("../assets/images/xls.png")} />
                    <Text>daatash...</Text>
                  </View>
                  <View>
                    <Image source={require("../assets/images/pdf-file.png")} />
                    <Text>daatash...</Text>
                  </View>
                  <View>
                    <Image source={require("../assets/images/pdf-file.png")} />
                    <Text>daatash...</Text>
                  </View>
                  <View>
                    <Image source={require("../assets/images/pdf-file.png")} />
                    <Text>daatash...</Text>
                  </View>
                </View>
              </List.Accordion>
            </List.Section>
            <List.Section style={styles.accordianContainer}>
              <List.Accordion
                title="Investment Data"
                titleStyle={{ fontSize: Font.large, fontWeight: "bold" }}
              >
                <View>
                  <View style={styles.details}>
                    <Text>Monthly Interest</Text>
                    <Text>13.6</Text>
                  </View>
                  <View style={styles.details}>
                    <Text>Backout Penalty</Text>
                    <Text>20{"%"}</Text>
                  </View>
                  <View style={styles.details}>
                    <Text>Investment lifetime</Text>
                    <Text>infinite</Text>
                  </View>
                  <View style={styles.details}>
                    <Text>Success Index</Text>
                    <Text>7.6</Text>
                  </View>
                  <View style={styles.details}>
                    <Text>back out threshold time</Text>
                    <Text>10 months</Text>
                  </View>
                  <View style={styles.details}>
                    <Text>Total Budget</Text>
                    <Text>Infinite</Text>
                  </View>
                  <View style={styles.details}>
                    <Text>Current invested amount</Text>
                    <Text>$36,000</Text>
                  </View>
                  <View style={styles.details}>
                    <Text>Maximum loss allowed</Text>
                    <Text>{"%"}35</Text>
                  </View>
                  <View style={styles.details}>
                    <Text>Investment Deadline</Text>
                    <Text>23/09/20</Text>
                  </View>
                </View>
              </List.Accordion>
            </List.Section>
          </View>
          <ProgressBarComponent
            progressBarStyle={{
              backgroundColor: "#91D5FF",
            }}
          />
        </View>
        <Button
          touchableProps={{
            onPress: () => this.props.navigation.navigate("invite-others"),
          }}
          body={
            <Text
              style={[globalStyles.btnLabel, { textTransform: "uppercase" }]}
            >
              set up Investment
            </Text>
          }
          touchableStyleProps={{
            backgroundColor: "#52c41a",
            marginRight: 5,
            marginLeft: 5,
            marginTop: 25,
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  container: {
    borderTopWidth: 3,
    borderTopColor: "#003A8C",
    marginTop: 0,
    margin: 5,
  },
  menuContainer: {
    flex: 1,
    marginRight: 40,
    backgroundColor: "#F4FBFF",
  },
  body: {
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 5,
  },
  description: {
    padding: 10,
    backgroundColor: "#F4FBFF",
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F4FBFF",
  },
  statusText: {
    backgroundColor: "green",
    color: "#fff",
    borderRadius: 5,
    margin: 5,
  },
  headingMain: {
    fontSize: 19,
    color: "#2F3D52",
    fontWeight: "bold",
  },
  statistics: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#003A8C",
    padding: 16,
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
  },
  Image: {
    alignItems: "center",
  },

  // Accordion
  fileDisplay: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 7,
    borderTopWidth: 1,
    borderTopColor: "#f0dfe0",
  },
});
