import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const PlayButton = () => {
  return (
    <TouchableOpacity>
      <Icon name="caret-forward-circle" size={60} color="white" />
    </TouchableOpacity>
  );
};
