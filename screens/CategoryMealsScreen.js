import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Button
        title="Go to Meal Detail Screen"
        onPress={() => props.navigation.navigate("MealDetail")}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.pop();
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

export default CategoryMealsScreen;
