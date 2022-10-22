import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import RandomNumber from "./RandomNumber";

function Game({ randomNumberCount }) {
  const [selectedNumber, setSelectedNumber] = useState([]);

  var randomNumbers = Array.from({ length: randomNumberCount }).map(
    () => 1 + Math.floor(10 * Math.random())
  );

  const isNumberSelected = (numberIndex) => {
    return selectedNumber.indexOf(numberIndex) >= 0;
  };

  const selectNumber = (numberIndex) => {
    setSelectedNumber((prevState) => [...prevState, numberIndex]);
  };

  var target = randomNumbers
    .slice(0, randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.target}>{target}</Text>
      <View style={styles.numbersContainer}>
        {randomNumbers.map((num, index) => (
          <RandomNumber
            key={index}
            id={index}
            randomNum={num}
            isDisabled={isNumberSelected(index)}
            onPress={selectNumber}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    flex: 1,
    paddingTop: 30,
  },
  target: {
    fontSize: 40,
    backgroundColor: "#aaa",
    marginHorizontal: 50,
    textAlign: "center",
  },
  numbersContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default Game;
