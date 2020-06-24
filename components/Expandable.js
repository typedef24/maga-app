import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import fonts from "../constants/fonts";
import { FontAwesome5 } from "@expo/vector-icons";

export default class Expandable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curState: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.setState({ curState: !this.state.curState })}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 1,
              borderColor: this.state.curState ? "#5c8bc0" : "#c3eaff",
              backgroundColor: this.state.curState ? "#bae7ff" : "#f4fbff",
              padding: 15,
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5
                name="money-check-alt"
                size={24}
                color="#003a8c"
                style={{ marginRight: 10 }}
              />
              <Text
                style={{
                  fontSize: fonts.large,
                  fontWeight: "bold",
                  color: "#003a8c",
                }}
              >
                {this.props.title}
              </Text>
            </View>
            <FontAwesome5 name="money-check-alt" size={24} color="#003a8c" />
          </View>
        </TouchableOpacity>
        {this.state.curState && (
          <View style={{ backgroundColor: "#f4fbff" }}>
            {this.props.children}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
