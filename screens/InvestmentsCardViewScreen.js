import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { PageTitle } from "../components/PageTitle";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Iconfont from "@expo/vector-icons/FontAwesome5";

import Layout from "../constants/Layout";
import ProgressBarComponent from "../components/ProgressBarComponent";
import { ScrollView } from "react-native-gesture-handler";
import globalStyles from "../constants/globalStyles";
import Button from "../components/Button";
import AppConstants from "../constants/AppConstants";

export default function InvestmentsCardViewScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={{ flex: 1 }}>
      {/* <PageTitle title="Investment Opportunities" /> */}
      <ScrollView style={styles.containerMain}>
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
                <Image
                  source={{
                    uri: AppConstants.strapiBaseURL + item.img.url,
                  }}
                  style={styles.Image}
                ></Image>
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
                  {item.duration} {"months"}
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
          </View>
          <ProgressBarComponent
            progressBarStyle={{
              backgroundColor: "#91D5FF",
            }}
          />
        </View>
        <Button
          // onPress={() => navigation.navigate("signup")}
          body={<Text style={globalStyles.btnLabel}>Explore</Text>}
          touchableStyleProps={{
            backgroundColor: "#52c41a",
            marginRight: 5,
            marginLeft: 5,
            marginTop: 20,
            marginBottom: 20,
          }}
          touchableProps={{
            onPress: () => {
              navigation.navigate("investment-detail", { item });
            },
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: "white",
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
    height: 40,
    width: 50,
  },
});
