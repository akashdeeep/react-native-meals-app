import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default MealItem = (props) => {
	const navigation = useNavigation();

	function selectMealItemHandler() {
		navigation.navigate("MealDetails", {
			mealId: props.id,
		});
	}

	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
				onPress={selectMealItemHandler}>
				<View>
					<Image style={styles.image} source={{ uri: props.imageUrl }} />
					<Text style={styles.title}>{props.title}</Text>
				</View>
				<View style={styles.details}>
					<Text style={styles.detailItem}>{props.duration}m</Text>
					<Text style={styles.detailItem}>
						{props.complexity.toUpperCase()}
					</Text>
					<Text style={styles.detailItem}>
						{props.affordability.toUpperCase}
					</Text>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		margin: 10,
		borderRadius: 10,
		overflow: "hidden",
		backgroundColor: "#f5f5f5",
		elevation: 5,
		shadowColor: "black",
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		fontSize: 18,
		textAlign: "center",
		fontWeight: "bold",
		margin: 10,
	},
	details: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",

		padding: 10,
	},
	detailItem: {
		marginHorizontal: 10,
		fontSize: 12,
	},
	container: {},
	buttonPressed: {
		opacity: 0.5,
	},
});
