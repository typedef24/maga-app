import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Image,
} from "react-native";

import img from "../assets/images/profile.jpg";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";
import fonts from "../constants/fonts";
import { Divider } from "react-native-paper";

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proileImage: "",
      profileItems: [
        {
          profileOptionItem: "Perfomrance History",
          screenToNavigate: "investmentPerformanceScreen",
          itemIcon: "chart-line-variant",
        },
        {
          profileOptionItem: "Risk Profile",
          screenToNavigate: "risk-profiles",
          itemIcon: "asterisk",
        },
        {
          profileOptionItem: "Edit Profile",
          screenToNavigate: "myProfileScreen",
          itemIcon: "account-edit",
        },
        {
          profileOptionItem: "Invite Other Investors",
          screenToNavigate: "invite-others",
          itemIcon: "share",
        },
        {
          profileOptionItem: "Contact Support",
          screenToNavigate: "contact-support",
          itemIcon: "message-outline",
        },
      ],
    };
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        {Platform.OS === "android" && (
          <StatusBar backgroundColor="white" barStyle="dark-content" />
        )}
        <ScrollView>
          <View style={styles.container}>
            {/*Top Large Image */}
            <Image
              // source={{ uri: this.proileImage }}
              source={img}
              style={styles.ProfileIcon}
            />
            {/*Divider between Top Image and Profile Options*/}
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#e2e2e2",
                marginTop: 15,
              }}
            />
          </View>
          {/* Profile Items */}
          <View>
            {this.state.profileItems.map((item, key) => (
              <View>
                <View style={styles.itemsContainer} key={item.key}>
                  <View style={styles.textStyle}>
                    <View style={{ marginRight: 10, marginLeft: 20 }}>
                      <MaterialCommunityIcons
                        name={item.itemIcon}
                        size={25}
                        color="#808080"
                      />
                    </View>

                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate(item.screenToNavigate)
                      }
                    >
                      <Text style={{ fontSize: fonts.large }}>
                        {item.profileOptionItem}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: "#e2e2e2",
                    marginTop: 15,
                  }}
                />
              </View>
            ))}
          </View>
          <View style={styles.btnSearch}>
            <Button
              body={<Text style={globalStyles.btnLabel}>LogOut</Text>}
              touchableStyleProps={{
                backgroundColor: "#52c41a",
                marginTop: 10,
                marginRight: 25,
                marginLeft: 25,
              }}
              touchableProps={{
                onPress: () => {
                  alert("Logout");
                },
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },
  ProfileIcon: {
    alignSelf: "center",
    // resizeMode: "center",
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 250 / 2,
  },
  itemsContainer: {
    margin: 10,
    flexDirection: "row",
  },
  textStyle: {
    marginRight: 10,
    marginLeft: 20,
    flexDirection: "row",
  },
});
