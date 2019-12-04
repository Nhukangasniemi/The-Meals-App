import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen</Text>
      <Button
        title="Go Back To Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailScreen;
