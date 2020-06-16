import * as React from "react";
import { StyleSheet, View, Text, StatusBar, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import InputField from "../components/InputField";
import globalStyles from "../constants/globalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
// import image
import Image1 from "../assets/images/MailSentPic.png";

export default class ResetConfirmationScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {Platform.OS === "android" && (
            <StatusBar backgroundColor="#003A8C" barStyle="light-content" />
          )}
          <LinearGradient
            colors={["#003a8c", "#137fe9"]}
            style={styles.gradient}
          >
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Image
                style={styles.sliderImage}
                source={Image1}
                resizeMode="contain"
              />
              <Text style={ globalStyles.labelPicScreen }>
                  Check your Email for your password update link
              </Text>
            </View>
          </LinearGradient>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gradient: {
    flex: 1,
    justifyContent: "center",
    padding: 15,
  },

  sliderImage: {
    width: "60%",
    height: 150,
    marginBottom: 30,
  },

});
