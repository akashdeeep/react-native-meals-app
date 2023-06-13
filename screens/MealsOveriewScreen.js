import { useLayoutEffect } from "react";

import {
	View,
	Text,
	StyleSheet,
	FlatList,
	ImageBackground,
	Pressable,
} from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";

export default MealsOverviewScreen = (props) => {
	const catId = props.route.params.categoryId;

	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0
	);

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(
			(category) => category.id === catId
		).title;

		props.navigation.setOptions({
			title: categoryTitle,
		});
	}, [catId, props.navigation]);

	return <MealsList items={displayedMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
});
