import Meal from "../models/meal";

import { useLayoutEffect, useContext, useSelector, useDispatch } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
// import { ScrollView } from "react-native-gesture-handler";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";
import { addFavourite } from "../store/redux/favourites";
import { removeFavourite } from "../store/redux/favourites";
// import { FavouritesContext } from "../store/context/favourites-context";

export default MealDetailsScreen = (props) => {
	// const favouritesContext = useContext(FavouritesContext);
	// console.log("favouritesContext", favouritesContext);
	const favouriteMealIds = useSelector((state) => state.favourites.ids);
	const dispatch = useDispatch();

	const mealId = props.route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	const mealIsFavourite = favouriteMealIds.includes(mealId);

	toggleFavourite = () => {
		// console.log("toggleFavourite", selectedMeal.id, mealIsFavourite);
		if (mealIsFavourite) {
			// favouritesContext.removeFavourite(selectedMeal.id);
			dispatch(removeFavourite({ id: mealId }));
		} else {
			// favouritesContext.addFavourite(meal);
			dispatch(addFavourite({ id: mealId }));
		}
	};

	useLayoutEffect(() => {
		props.navigation.setOptions({
			title: selectedMeal.title,
			headerRight: () => {
				return (
					<IconButton
						icon={mealIsFavourite ? "star" : "star-outline"}
						color="white"
						onPress={toggleFavourite}
					/>
				);
			},
		});
	}, [props.navigation, selectedMeal, mealIsFavourite]);

	return (
		<ScrollView>
			<View style={styles.container}>
				<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />

				{/* <View style={styles.details}>
				<Text>{selectedMeal.duration}m</Text>
				<Text>{selectedMeal.complexity.toUpperCase()}</Text>
				<Text>{selectedMeal.affordability.toUpperCase()}</Text>
			</View> */}
				<MealDetails meal={selectedMeal} />
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: "100%",
		height: 200,
	},
	details: {
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 15,
	},
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 30,
	},
});
