import { FlatList, View } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default CategoriesScreen = (props) => {
	renderCategoryItem = (itemData) => {
		function pressHandler() {
			props.navigation.navigate("MealsOverview", {
				categoryId: itemData.item.id,
			});
		}

		return (
			<CategoryGridTile
				onPress={pressHandler}
				title={itemData.item.title}
				color={itemData.item.color}
			/>
		);
	};

	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item, index) => item.id}
			renderItem={renderCategoryItem}
			numColumns={2}
		/>
	);
};
