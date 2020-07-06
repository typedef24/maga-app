import React, { useState } from "react";
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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Image1 from "../assets/images/investment.png";
import Layout from "../constants/Layout";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ProgressBarComponent from "../components/ProgressBarComponent";
import Button from "../components/Button";
import ModalComponent from "../components/ModalComponent";
import globalStyles from "../constants/globalStyles";
import Font from "../constants/fonts";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function DetailsInvestmentScreen({ route, navigation }) {
  const [modalVisible, isModalVisible] = useState(false);
  const [expanded, isExapanded] = useState(true);

  // Read params from navigation state
  const { item } = route.params;

  return (
    <ScrollView style={{ flex: 1 }}>
      {Platform.OS === "android" && (
        <StatusBar backgroundColor="#fffcfc" barStyle="dark-content" />
      )}
      {/* FIrst section */}
      <View style={[styles.container, styles.shadowStyle]}>
        {/* Modal - Starts */}
        <ModalComponent
          visible={modalVisible}
          onRequestClose={() => {
            isModalVisible({ modalVisible: false });
          }}
          title=""
          closeFxn={() => {
            isModalVisible({ modalVisible: false });
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <SimpleLineIcons name="share" size={20} color="black" />
            <Button
              body={
                <Text
                  style={[
                    globalStyles.btnLabel,
                    {
                      color: "black",
                      fontSize: Font.medium,
                      fontWeight: "300",
                    },
                  ]}
                >
                  Invite Other Investors
                </Text>
              }
              touchableProps={{
                onPress: () => {
                  isModalVisible({ modalVisible: false });
                  navigation.navigate("invite-others");
                },
              }}
            />
          </View>
          <Divider color="red" />

          {/* Performance History */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <MaterialIcons name="show-chart" size={24} color="black" />
            <Button
              body={
                <Text
                  style={[
                    globalStyles.btnLabel,
                    {
                      color: "black",
                      fontSize: Font.medium,
                      fontWeight: "300",
                    },
                  ]}
                >
                  Performance History
                </Text>
              }
              touchableProps={{
                onPress: () => {
                  isModalVisible({ modalVisible: false });
                  navigation.navigate("investmentPerformanceScreen");
                },
              }}
            />
          </View>
          <Divider color="red" />

          {/* Contact Support */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="black"
            />
            <Button
              body={
                <Text
                  style={[
                    globalStyles.btnLabel,
                    {
                      color: "black",
                      fontSize: Font.medium,
                      fontWeight: "300",
                    },
                  ]}
                >
                  Contact Support
                </Text>
              }
              touchableProps={{
                onPress: () => {
                  isModalVisible({ modalVisible: false });
                  navigation.navigate("contact-support");
                },
              }}
            />
          </View>
          <Divider color="red" />

          {/* Cancel Investment */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="close-circle-outline"
              size={24}
              color="black"
            />
            <Button
              body={
                <Text
                  style={[
                    globalStyles.btnLabel,
                    {
                      color: "black",
                      fontSize: Font.medium,
                      fontWeight: "300",
                    },
                  ]}
                >
                  Cancel Investment
                </Text>
              }
              touchableProps={{
                onPress: () => {
                  isModalVisible({ modalVisible: false });
                  alert("Investment Canceled!");
                },
              }}
            />
          </View>
        </ModalComponent>
        {/* Ends */}

        <View style={{ backgroundColor: "#F4FBFF" }}>
          <View style={{ flex: 1 }}>
            <View style={styles.statusRow}>
              <Text style={styles.statusText}>{item.opportunity.status}</Text>
              <TouchableOpacity
                onPress={() => {
                  isModalVisible(true);
                }}
              >
                <Text style={{ paddingRight: 15, fontSize: Font.large }}>
                  ...
                </Text>
              </TouchableOpacity>
            </View>
            {/* <ModalComponent style={{ flex: 1, zIndex: 4 }} /> */}
          </View>
          <View style={styles.body}>
            <Text style={{ width: Layout.window.width * 0.82 }}>
              {item.opportunity.title}
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
              {item.grow_rate}
              {"%"}
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
            <Icon name="money" size={20} color="#fff" style={{ padding: 4 }} />
            <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>
              {" "}
              {"$"}
              {item.current_earnings}
            </Text>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={{ paddingBottom: 10 }}>
            {item.opportunity.description}
          </Text>
          <Divider color="red" />
          <List.Section style={styles.accordianContainer}>
            <List.Accordion
              title="Support Documents"
              titleStyle={{ fontSize: Font.large, fontWeight: "bold" }}
            >
              <View style={styles.fileDisplay}>
                <View>
                  <Image source={item.support_documents} />
                  <Text>daatash...</Text>
                </View>
                {/* <View>
                  <Image source={require("../assets/images/xls.png")} />
                  <Text>daatash...</Text>
                </View>*/}
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
          onPress: () => navigation.navigate("invite-others"),
        }}
        body={
          <Text style={[globalStyles.btnLabel, { textTransform: "uppercase" }]}>
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
    paddingTop: 10,
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
    borderRadius: 10,
    margin: 5,
    padding: 5,
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
