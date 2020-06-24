import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import image
import Image1 from "../assets/images/withdrawConfirm.png";
import fonts from "../constants/fonts";
import globalStyles from "../constants/globalStyles";
import Button from "../components/Button";

export default class CheckoutScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              style={styles.sliderImage}
              source={Image1}
              resizeMode="contain"
            />
            <Text
              style={{
                paddingTop: 25,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: fonts.large,
              }}
            >
              Payment Confirmed
            </Text>
            <Text
              style={{
                paddingTop: 15,
                textAlign: "center",
                fontSize: fonts.large,
              }}
            >
              Thank you for choosing to invest with Kemet. We will inform you
              once the payment has been processed.
            </Text>
          </View>
          <Button
            body={<Text style={globalStyles.btnLabel}>YOUR TRANSACTIONS</Text>}
            touchableStyleProps={{
              backgroundColor: "#52c41a",
            }}
            touchableProps={{
              onPress: () => this.props.navigation.navigate("checkoutScreen"),
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 15,
  },

  sliderImage: {
    width: "100%",
    height: 200,
  },
});
