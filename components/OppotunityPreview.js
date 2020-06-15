import * as React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Iconfont from "@expo/vector-icons/FontAwesome5";

import Image1 from "../assets/images/dish.png";
import ProgressBarComponent from "./ProgressBarComponent";

import Color from "../constants/Colors";

export function OppotunityPreview() {
  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        {/* <TouchableOpacity> */}
        <View style={styles.statusBar}>
          <View style={styles.status}>
            <Text style={styles.statusText}>Ongoing</Text>
            <Icon
              name="bookmark"
              size={25}
              style={{ marginTop: -15 }}
              color="#003A8C"
            />
          </View>
          <TouchableOpacity>
            <View style={styles.body}>
              <Text style={{ width: "90%" }}>
                Real estate investments funds in the dubai, los Angeles, new
                York and sub-saharan Africa.
              </Text>
              <Image source={Image1} style={styles.Image}></Image>
            </View>
          </TouchableOpacity>
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
              20.5{"%"}
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
              {"$"}4,300
            </Text>
          </View>
        </View>
        <ProgressBarComponent />
      </View>

      <View style={styles.progress}>
        {/* <TouchableOpacity> */}
        <View style={styles.statusBar}>
          <View style={styles.status}>
            <Text style={styles.statusText}>Ongoing</Text>
            <Icon
              name="bookmark"
              size={25}
              style={{ marginTop: -15 }}
              color="#003A8C"
            />
          </View>
          <TouchableOpacity>
            <View style={styles.body}>
              <Text style={{ width: "90%" }}>
                Real estate investments funds in the dubai, los Angeles, new
                York and sub-saharan Africa.
              </Text>
              <Image source={Image1} style={styles.Image}></Image>
            </View>
          </TouchableOpacity>
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
              20.5{"%"}
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
              {"$"}4,300
            </Text>
          </View>
        </View>
        <ProgressBarComponent />
      </View>

      <View
        style={({ borderTopColor: Color.warningBackground }, styles.progress)}
      >
        {/* <TouchableOpacity> */}
        <View style={styles.statusBar}>
          <View style={styles.status}>
            <Text style={styles.statusText}>Ongoing</Text>
            <Icon
              name="bookmark"
              size={25}
              style={{ marginTop: -15 }}
              color="#003A8C"
            />
          </View>
          <TouchableOpacity>
            <View style={styles.body}>
              <Text style={{ width: "90%" }}>
                Real estate investments funds in the dubai, los Angeles, new
                York and sub-saharan Africa.
              </Text>
              <Image source={Image1} style={styles.Image}></Image>
            </View>
          </TouchableOpacity>
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
              20.5{"%"}
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
              {"$"}4,300
            </Text>
          </View>
        </View>
        <ProgressBarComponent />
      </View>

      <View style={styles.progress}>
        {/* <TouchableOpacity> */}
        <View style={styles.statusBar}>
          <View style={styles.status}>
            <Text style={styles.statusText}>Ongoing</Text>
            <Icon
              name="bookmark"
              size={25}
              style={{ marginTop: -15 }}
              color="#003A8C"
            />
          </View>
          <TouchableOpacity>
            <View style={styles.body}>
              <Text style={{ width: "90%" }}>
                Real estate investments funds in the dubai, los Angeles, new
                York and sub-saharan Africa.
              </Text>
              <Image source={Image1} style={styles.Image}></Image>
            </View>
          </TouchableOpacity>
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
              20.5{"%"}
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
              {"$"}4,300
            </Text>
          </View>
        </View>
        <ProgressBarComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingBottom: 10,
    marginBottom: 58,
  },
  progress: {
    borderTopWidth: 3,
    borderTopColor: "#003A8C",
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 20,
    shadowColor: "red",
  },
  statusBar: {
    backgroundColor: "#F4FBFF",
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
    paddingTop: 30,
    paddingBottom: 10,
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
    backgroundColor: "#F4FBFF",
    padding: 16,
  },
  iconText: {
    flexDirection: "row",
    color: "blue",
  },
  Image: {
    alignItems: "center",
    marginTop: 10,
  },
});
