import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOveriewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: "#351401",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
						cardStyle: {
							backgroundColor: "#3f2f25",
						},
					}}>
					<Stack.Screen
						name="MealsCategories"
						component={CategoriesScreen}
						options={{
							title: "Meal Categories",
						}}
					/>
					<Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
					<Stack.Screen name="MealsDetails" component={MealsDetailsScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
