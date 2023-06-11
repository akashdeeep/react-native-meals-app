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
import MealItem from "../components/MealItem";

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

	renderMealItem = (itemData) => {
		const mealItemProps = {
			if: itemData.item.id,
			title: itemData.item.title,
			imageUrl: itemData.item.imageUrl,
			duration: itemData.item.duration,
			complexity: itemData.item.complexity,
			affordability: itemData.item.affordability,
		};

		return <MealItem {...mealItemProps} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item, index) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
});
