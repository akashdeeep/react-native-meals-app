import { View, Text, StyleSheet } from "react-native";

export default List = (props) => {
	return props.data.map((item, index) => (
		<View key={index} style={styles.listItem}>
			<Text style={styles.itemText}>{item}</Text>
		</View>
	));
};

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: "#ccc",
		borderColor: "black",
		borderWidth: 1,
	},
	itemText: {
		fontSize: 18,
		borderRadius: 5,
	},
});
