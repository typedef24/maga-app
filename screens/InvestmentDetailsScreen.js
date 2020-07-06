import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Iconfont from "@expo/vector-icons/FontAwesome5";

import ProgressBarComponent from "../components/ProgressBarComponent";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import globalStyles from "../constants/globalStyles";
import Button from "../components/Button";
import Layout from "../constants/Layout";
import image from "../assets/images/dish.png";

export default function InvestmentDetailsScreen({ route, navigation }) {
  // Read params from navigation state
  const { item } = route.params;

  return (
    <View>
      {Platform.OS === "android" && (
        <StatusBar backgroundColor="#fffcfc" barStyle="dark-content" />
      )}
      <ScrollView style={({ marginBottom: 20 }, styles.containerMain)}>
        <View style={styles.container}>
          <View style={styles.progress}>
            <View style={styles.statusBar}>
              <View style={styles.status}>
                {item.status === "ongoing" ? (
                  <Text style={styles.statusText}>{item.status}</Text>
                ) : (
                  <Text style={[styles.statusText, { backgroundColor: "red" }]}>
                    {item.status}
                  </Text>
                )}

                <Icon
                  name="bookmark"
                  size={25}
                  style={{ marginTop: -15 }}
                  color="#003A8C"
                />
              </View>
              <View style={styles.body}>
                <Text style={{ width: Layout.window.width * 0.8 }}>
                  {item.title}
                </Text>
                <Image source={item.img} style={styles.Image}></Image>
              </View>
            </View>
            {/* </TouchableOpacity> */}
            <View style={styles.statistics}>
              <View style={styles.iconText}>
                <Icon
                  name="alert-decagram"
                  size={15}
                  color="#4D7BF3"
                  style={{ paddingTop: 4 }}
                />
                <Text
                  style={{ color: "#003A8C", fontSize: 13, fontWeight: "bold" }}
                >
                  {" "}
                  {item.rate}
                  {"%"}
                </Text>
              </View>
              <View style={styles.iconText}>
                <Icon
                  name="square-inc-cash"
                  size={15}
                  color="#4D7BF3"
                  style={{ paddingTop: 4 }}
                />
                <Text
                  style={{ color: "#003A8C", fontSize: 13, fontWeight: "bold" }}
                >
                  {" "}
                  6 {"months"}
                </Text>
              </View>
              <View style={styles.iconText}>
                <Iconfont
                  name="piggy-bank"
                  size={15}
                  color="#4D7BF3"
                  style={{ paddingTop: 4 }}
                />
                <Text
                  style={{ color: "#003A8C", fontSize: 13, fontWeight: "bold" }}
                >
                  {" "}
                  {"$"}
                  {item.price}
                </Text>
              </View>
            </View>
            <View style={styles.description}>
              <Text>{item.description}</Text>
            </View>
            <View>
              <Text
                style={
                  ({
                    borderTopWidth: 1,
                    borderTopColor: "#f0dfe0",
                  },
                  styles.subHeading)
                }
              >
                Support Documents
              </Text>
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
              <View style={styles.fileDisplay}>
                <View>
                  <Image source={require("../assets/images/docx.png")} />
                  <Text>daatash...</Text>
                </View>
                <View>
                  <Image source={require("../assets/images/docx.png")} />
                  <Text>daatash...</Text>
                </View>
                <View>
                  <Image source={require("../assets/images/docx.png")} />
                  <Text>daatash...</Text>
                </View>
              </View>
            </View>
            <Text style={styles.subHeading}>Investment Data</Text>
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
              <Text>{item.risk_profile}</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("contact-support")}
            >
              <Text style={styles.textSupport}>Support</Text>
            </TouchableOpacity>
          </View>
          <ProgressBarComponent
            progressBarStyle={{
              backgroundColor: "#91D5FF",
            }}
          />
        </View>
        {item.status === "ongoing" ? (
          <Button
            touchableProps={{
              onPress: () => {
                navigation.navigate("paymentScreen", { item });
              },
            }}
            body={
              <Text style={globalStyles.btnLabel}>Invest ${item.price}</Text>
            }
            touchableStyleProps={{
              backgroundColor: "#52c41a",
              marginRight: 5,
              marginLeft: 5,
              marginTop: 20,
              marginBottom: 10,
            }}
          />
        ) : (
          <Button
            touchableProps={{
              onPress: () => {
                alert(
                  "This investment has been closed, Please invest on and ongoing investment"
                );
              },
            }}
            body={<Text style={globalStyles.btnLabel}>Investment Closed</Text>}
            touchableStyleProps={{
              backgroundColor: "red",
              marginRight: 5,
              marginLeft: 5,
              marginTop: 20,
              marginBottom: 10,
            }}
          />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    // height: Layout.window.height * 0.8,
  },
  container: {
    backgroundColor: "#F4FBFF",
    marginRight: 5,
    marginLeft: 5,
  },
  progress: {
    borderTopWidth: 3,
    borderTopColor: "#033c8d",
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 20,
    shadowColor: "red",
  },
  statusBar: {
    // backgroundColor: "#F4FBFF",
  },
  status: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  statusText: {
    backgroundColor: "green",
    color: "#fff",
    borderRadius: 5,
    padding: 4,
  },
  body: {
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 5,
  },
  headingMain: {
    fontSize: 19,
    color: "#2F3D52",
    fontWeight: "bold",
  },
  statistics: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 7,
    borderTopWidth: 1,
    borderTopColor: "#f0dfe0",
  },
  description: {
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: "#f0dfe0",
  },
  iconText: {
    flexDirection: "row",
    color: "blue",
  },
  Image: {
    alignItems: "center",
    marginTop: 10,
  },
  fileDisplay: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
  },
  subHeading: {
    fontWeight: "bold",
    paddingTop: 5,
    paddingBottom: 10,
    fontSize: 17,
  },
  textSupport: {
    textAlign: "right",
    textDecorationLine: "underline",
    textDecorationColor: "blue",
  },
});
