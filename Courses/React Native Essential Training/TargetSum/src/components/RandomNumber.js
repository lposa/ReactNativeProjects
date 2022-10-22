import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const RandomNumber = ({ randomNum, isDisabled, onPress, id }) => {
  const handlePress = () => {
    if (isDisabled) {
      console.log("you already clicked there");
      return;
    }
    onPress(id);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text
        style={[styles.numbersItems, isDisabled && styles.numbersItemsSelected]}
      >
        {randomNum}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  numbersItems: {
    color: "black",
    padding: 20,
    margin: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    backgroundColor: "#fff",
    width: 100,
  },
  numbersItemsSelected: {
    opacity: 0.3,
  },
});

export default RandomNumber;
