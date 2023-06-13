import { FlatList, StyleSheet, View } from "react-native";
import { MEALS } from "../../data/dummy-data";
import MealItem from "./MealItem";

export default MealsList = (props) => {
	renderMealItem = (itemData) => {
		const mealItemProps = {
			id: itemData.item.id,
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
				data={props.items}
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
