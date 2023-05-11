import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../styles/styles";

// possibilité de faire le loader avec un ActivityIndicator de react native 
//et non  avec react-native-paper
const Loader = () => {
  return (
    <ActivityIndicator
      style={{
        top: "50%",
        position: "absolute",
        alignSelf: "center",
      }}
      size={100}
      color={colors.color3}
    />
  );
};

export default Loader;