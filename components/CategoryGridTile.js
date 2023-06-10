import { Pressable, View, Text, StyleSheet } from "react-native";

export default CategoryGridTile = (props) => {
	return (
		<View style={styles.gridItem}>
			<Pressable>
				<View>
					<Text>{props.title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: { flex: 1, margin: 15, height: 150 },
});
