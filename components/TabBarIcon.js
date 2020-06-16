import Icon from "@expo/vector-icons/FontAwesome5";
import * as React from "react";

import Colors from "../constants/Colors";

export default function TabBarIcon(props) {
  return (
    <Icon
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
