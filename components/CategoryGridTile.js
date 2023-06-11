import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

export default CategoryGridTile = (props) => {
	// const navigation = useNavigation();

	return (
		<View style={styles.gridItem}>
			<Pressable
				onPress={props.onPress}
				android_ripple={{ color: "#ccc" }}
				style={styles.button}>
				<View style={[styles.innerContainer, { backgroundColor: props.color }]}>
					<Text style={styles.title}>{props.title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		height: 150,
		borderRadius: 10,
		overflow:
			Platform.OS === "android" && Platform.Version >= 21
				? "hidden"
				: "visible",
		elevation: 5,
		shadowColor: "black",
		backgroundColor: "white",
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		margin: 10,
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		flex: 1,
		opacity: 0.5,
	},

	innerContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	title: {
		fontWeight: "bold",
		fontSize: 15,
	},
});
