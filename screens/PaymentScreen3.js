import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import Expandable from "../components/Expandable";
import globalStyles from "../constants/globalStyles";
import fonts from "../constants/fonts";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
// import image
import Image1 from "../assets/images/investment.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default class PaymentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      paymentMethod: props.route.params.paymentMethod,
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <View
              style={{
                backgroundColor: "#f4fbff",
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderTopWidth: 4,
                borderTopColor: "#003a8c",
              }}
            >
              <Text style={{ fontSize: fonts.medium, flex: 5 }}>
                Real estate investments funds in the dubai, los Angeles, new
                York and sub-saharan Africa.
              </Text>
              <Image style={styles.sliderImage} source={Image1} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                backgroundColor: "#003a8c",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon
                  name="alert-decagram"
                  size={24}
                  color="white"
                  style={{ paddingRight: 5 }}
                />
                <Text style={{ color: "white" }}>15%</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  style={{ paddingRight: 5 }}
                  name="cash-usd"
                  size={24}
                  color="white"
                />
                <Text style={{ color: "white" }}>40 months</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome5
                  style={{ paddingRight: 5 }}
                  name="piggy-bank"
                  size={20}
                  color="white"
                />
                <Text style={{ color: "white" }}>$2 000</Text>
              </View>
            </View>

            <View
              style={{
                padding: 15,
                marginTop: 15,
                backgroundColor: "#f4fbff",
                borderWidth: 1,
                borderColor: "#ccedff",
              }}
            >
              <Text>Total Amount:</Text>
              <Text style={{ fontWeight: "bold" }}>USD 2,000</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                padding: 15,
                backgroundColor: "#f4fbff",
                borderWidth: 1,
                borderColor: "#ccedff",
              }}
            >
              <Button
                body={
                  <Text style={[globalStyles.btnLabelSm, { color: "#2f3d52" }]}>
                    CHANGE INVESTMENT
                  </Text>
                }
                touchableStyleProps={{
                  backgroundColor: "#bae7ff",
                  borderColor: "#2597ff",
                  borderWidth: 1,
                }}
                touchableProps={{
                  onPress: () => {
                    alert("CHANGE INVESTMENT Btn Clicked!!");
                  },
                }}
              />
            </View>

            <Text
              style={{
                paddingTop: 15,
                paddingBottom: 15,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: fonts.large,
                color: "#485567",
              }}
            >
              {this.state.paymentMethod == "Bank Transfer"
                ? "Do a direct transfer or bank deposit to any of the bank accounts below."
                : "Transfer the above sum to the paypal account below."}
            </Text>
          </View>

          {this.state.paymentMethod == "Bank Transfer" ? (
            <View>
              <Expandable title="Bank of America">
                <View style={{ padding: 15, alignItems: "center" }}>
                  <Text>Swift Code: SCBLDEFX</Text>
                  <Text>For further credit: Bank of America</Text>
                  <Text>Swift Code: UNAFCMCX</Text>
                  <Text>A/C: 18265106</Text>
                  <Text>Final Beneficiary: MINA CAMEROON</Text>
                  <Text>Code Bank: 10033</Text>
                  <Text>Code Agence: 05205</Text>
                  <Text>Account Number: 05016000242</Text>
                  <Text>Key: 45</Text>
                  <Text>Iban: CM 21100033-05205-05016000242-25</Text>
                </View>
              </Expandable>
              <Expandable title="JP Morgans">
                <View style={{ padding: 15, alignItems: "center" }}>
                  <Text>Some text</Text>
                </View>
              </Expandable>
            </View>
          ) : (
            <Expandable title="Paypal">
              <View style={{ padding: 15 }}>
                <Text>Account:</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: fonts.large }}>
                    invest@kemet.app
                  </Text>
                  <TouchableOpacity onPress={() => alert("Copy clicked")}>
                    <Text
                      style={[globalStyles.btnLabel2, { color: "#003a8c" }]}
                    >
                      COPY
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={{ marginTop: 10 }}>Link:</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: fonts.large }}>
                    https://www.ppl.us/kemetsO1Qs
                  </Text>
                  <TouchableOpacity onPress={() => alert("Copy clicked")}>
                    <Text
                      style={[globalStyles.btnLabel2, { color: "#003a8c" }]}
                    >
                      COPY
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Expandable>
          )}

          <Text
            style={{
              paddingTop: 25,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: fonts.large,
              color: "#485567",
            }}
          >
            NOTICE!
          </Text>
          <Text
            style={{
              padding: 15,
              paddingTop: 5,
              textAlign: "center",
              fontSize: fonts.large
            }}
          >
            You will receive confirmation of your investment not later than 2
            working days after you've completed the transaction and verified by
            uploading your deposit...
          </Text>

          <Button
            body={<Text style={globalStyles.btnLabel}>DONE</Text>}
            touchableStyleProps={{
              backgroundColor: "#52c41a",
              marginRight: 15,
              marginLeft: 15,
            }}
            touchableProps={{
              onPress: () => this.props.navigation.navigate("checkoutScreen"),
            }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingBottom: 20,
  },

  sliderImage: {
    flex: 1,
  },
});
