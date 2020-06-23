import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import ModalComponent from "../components/ModalComponent";
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
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View>
            <View
              style={{
                backgroundColor: "#f4fbff",
                padding: 15,
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
                padding: 20,
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
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 20,
                backgroundColor: "#f4fbff",
                borderWidth: 1,
                borderColor: "#ccedff",
              }}
            >
              <View>
                <Text>Discount code</Text>
                <Text style={{ fontWeight: "bold" }}>NEW-250</Text>
              </View>
              <Button
                body={
                  <Text style={[globalStyles.btnLabelSm, { color: "#2f3d52" }]}>
                    APPLY
                  </Text>
                }
                touchableStyleProps={{
                  backgroundColor: "#bae7ff",
                  borderColor: "#2597ff",
                  borderWidth: 1,
                }}
                touchableProps={{
                  onPress: () => {
                    alert("APPLY Btn Clicked!!");
                  },
                }}
              />
            </View>
          </View>

          <ModalComponent
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setState({ modalVisible: false });
            }}
            title="NAV cut-off Time"
            closeFxn={() => {
              this.setState({ modalVisible: false });
            }}
          >
            <View style={{ backgroundColor: "white", padding: 15 }}>
              <Text style={{ fontSize: fonts.medium, lineHeight: 20 }}>
                Your transactions will be based on calculation using the Net
                Asset Value (NAV) of the same Bounce Day if payment confirmation
                is made before 12:00PM (cut-off-time). If payment confirmation
                exceeds the cut-off time or done on a holiday, then the
                transaction will be base on the NAV of the next Bounce Day.
              </Text>
            </View>
            <Button
              body={<Text style={globalStyles.btnLabel}>OK, I UNDERSTAND</Text>}
              touchableStyleProps={{ backgroundColor: "#003a8c" }}
              touchableProps={{
                onPress: () => { 
                  this.setState({ modalVisible: false });
                  this.props.navigation.navigate("paymentScreen2");
                },
              }}
            />
          </ModalComponent>

          <Button
            body={<Text style={globalStyles.btnLabel}>CONFIRM</Text>}
            touchableStyleProps={{ backgroundColor: "#52c41a" }}
            touchableProps={{
              //onPress: () => this.props.navigation.navigate("paymentScreen2"),
              onPress: () => this.setState({ modalVisible: true }),
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
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    justifyContent: "space-between",
  },

  sliderImage: {
    flex: 1,
  },
});
