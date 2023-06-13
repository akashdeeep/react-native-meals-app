import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavouritesContext } from "../store/context/favourites-context";

import Meal from "../models/meal";

import { useLayoutEffect, useContext } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	Button,
} from "react-native";

export default FavouritesScreen = () => {
	console.log("FavouritesScreen");
	const favouritesContext = useContext(FavouritesContext);
	console.log("favouritesContext", favouritesContext);

	const favouriteMeals = MEALS.filter((meal) =>
		favouritesContext.ids.includes(meal.id)
	);
	if (favouriteMeals.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>
					No favourite meals found. Start adding some!
				</Text>
			</View>
		);
	}

	return <MealsList items={favouriteMeals} />;
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
