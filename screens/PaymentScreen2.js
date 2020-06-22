import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";
import fonts from "../constants/fonts";
import { FontAwesome } from "@expo/vector-icons";

export default class PaymentScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f4fbff",
                padding: 15,
              }}
            >
              <FontAwesome
                style={{ marginRight: 10 }}
                name="check-circle"
                size={20}
                color="#52c41a"
              />
              <View
                style={{
                  borderBottomColor: "#52c41a",
                  borderBottomWidth: 1,
                  flex: 2,
                }}
              />
              <Text style={{ flex: 1, fontWeight: "bold", marginLeft: 10 }}>
                pay
              </Text>
              <View
                style={{
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  flex: 2,
                }}
              />
              <Text style={{ flex: 1, color: "gray", marginLeft: 10 }}>
                confirm
              </Text>
            </View>

            <View style={{ padding: 10 }}>
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
                  <Text>Total Amount :</Text>
                  <Text style={{ fontWeight: "bold" }}>USD 1,800</Text>
                </View>
                <Button
                  body={
                    <Text
                      style={{
                        color: "#003a8c",
                        fontWeight: "bold",
                        fontSize: fonts.medium,
                      }}
                    >
                      DETAILS
                    </Text>
                  }
                  touchableStyleProps={{
                    backgroundColor: "#f4fbff",
                  }}
                  touchableProps={{
                    onPress: () => {
                      alert("DETAILS Btn Clicked!!");
                    },
                  }}
                />
              </View>
              <View
                style={{
                  padding: 20,
                  backgroundColor: "#f4fbff",
                  borderWidth: 1,
                  borderColor: "#ccedff",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FontAwesome
                  style={{ marginRight: 10 }}
                  name="check-circle"
                  size={25}
                  color="#52c41a"
                />
                <Text style={{ fontWeight: "bold" }}>CASHBACK025</Text>
              </View>
            </View>

            <Text style={{ textAlign: "center", padding: 10, fontWeight: "bold", color: "#2f3d52", fontSize: fonts.large }}>select payment method</Text>
            

          </View>
          <Button
            body={<Text style={globalStyles.btnLabel}>CONTINUE</Text>}
            touchableStyleProps={{
              backgroundColor: "#52c41a",
              marginRight: 15,
              marginLeft: 15,
            }}
            touchableProps={{
              onPress: () => this.props.navigation.navigate("paymentScreen2"),
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
    paddingBottom: 20,
    justifyContent: "space-between",
  },
});
