import { Text, View, StyleSheet, Image } from "react-native";

import { MEALS } from "../data/dummy-data";
import List from "./List";

export default MealDetails = (props) => {
	const meal = props.meal;

	return (
		<View style={styles.container}>
			<View>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Ingredients</Text>
				</View>
				<List data={meal.ingredients} />
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Steps</Text>
				</View>
				<List data={meal.steps} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		textAlign: "center",
		marginVertical: 10,
		color: "#888",
	},
	text: {
		fontSize: 16,
		marginVertical: 5,
	},
	titleContainer: {
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
		marginBottom: 10,
	},
});
