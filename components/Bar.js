import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class Bar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={{ justifyContent: "flex-end" }}>
            <LinearGradient
                colors={["#003a8c", "#137fe9"]}
                style={[ styles.gradient, { height: this.props.height } ]}
            >
            </LinearGradient>
            <Text style={{ color: "#137fe9", textAlign: "center" }}>{ this.props.label }</Text>
        </View>
    );
  }
  
}

const styles = StyleSheet.create({

  gradient: {
    width: 25,
  },

});
