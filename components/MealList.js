import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from './MealItem';
import { useSelector } from "react-redux";

const MealList = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

  const renderMealItem = itemData => {
    const isFavorite = favoriteMeals.find(meal => meal.id === itemData)
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
              mealTitle: itemData.title,
              isFav: isFavorite  
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
