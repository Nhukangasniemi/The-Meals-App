import React from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES } from "./../data/dummy-data";

const renderGridItem = itemData => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = props => {
  return (
    <FlatList
      keyExtractor={item => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gridItem: {
      flex: 1,
      margin: 15,
      height: 150
  }
});

export default CategoriesScreen;

// navigation.replace is good for a login screen so user can't go back to login screen
