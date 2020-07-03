import * as React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import fonts from "../constants/fonts";

export default class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        {...this.props} // Inherit any props passed to it e.g visible
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00000080",
            height: "100%",
          }}
        >
          <View
            style={{
              height: "auto",
              maxHeight: "80%",
              width: "90%",
              backgroundColor: "#fff",
            }}
          >
            <View
              style={{
                padding: 10,
                alignItems: "center",
                backgroundColor: "#bae7ff",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text></Text>
              <Text
                style={{
                  color: "#2f3d52",
                  fontSize: fonts.large,
                  fontWeight: "bold",
                }}
              >
                {this.props.title}
              </Text>
              <TouchableOpacity onPress={this.props.closeFxn}>
                <MaterialIcons name="cancel" size={30} color="#69c0ff" />
              </TouchableOpacity>
            </View>

            {this.props.children}
          </View>
        </View>
      </Modal>
    );
  }
}
