import Meal from "../models/meal";

import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default MealsDetailsScreen = (props) => {
	const mealId = props.route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	useLayoutEffect(() => {
		props.navigation.setOptions({
			title: selectedMeal.title,
		});
	}, [selectedMeal, props.navigation]);

	return (
		<View style={styles.container}>
			<Text>{selectedMeal.title}</Text>
		</View>
	);
};
