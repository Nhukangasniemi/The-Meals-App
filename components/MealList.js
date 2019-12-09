import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from './MealItem';

const MealList = props => {

  const renderMealItem = itemData => {
    return (
      <MealItem
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        title={itemData.item.title}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.title
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        style={{ width: "100%" }}
        data={props.listData}
        renderItem={renderMealItem}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealList;
