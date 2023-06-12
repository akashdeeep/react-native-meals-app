import Meal from "../models/meal";

import { useLayoutEffect } from "react";
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

export default MealDetailsScreen = (props) => {
	const mealId = props.route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	headerButtonPressHandler = () => {
		console.log("Marked as favorite!");
	};

	useLayoutEffect(() => {
		props.navigation.setOptions({
			title: selectedMeal.title,
			headerRight: () => {
				return (
					<IconButton
						icon="star"
						color="white"
						onPress={headerButtonPressHandler}
					/>
				);
			},
		});
	}, [props.navigation, selectedMeal]);

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
