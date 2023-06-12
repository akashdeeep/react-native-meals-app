import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOveriewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "#351401",
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "bold",
				},
				sceneContainerStyle: {
					backgroundColor: "#3f2f25",
				},
				drawerStyle: {
					backgroundColor: "#3f2f25",
				},
				drawerActiveTintColor: "#fff",
				drawerActiveBackgroundColor: "#351401",
				drawerInactiveTintColor: "#fff",
				drawerInactiveBackgroundColor: "#3f2f25",
				drawerLabelStyle: {
					fontWeight: "bold",
				},
			}}>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					title: "All Categories",
					drawerIcon: ({ focused, size, color }) => (
						<Ionicons
							name={focused ? "ios-restaurant" : "ios-restaurant-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Favourites"
				component={FavouritesScreen}
				options={{
					drawerIcon: ({ focused, size, color }) => (
						<Ionicons
							name={focused ? "ios-star" : "ios-star-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

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
						name="DrawerNavigator"
						component={DrawerNavigator}
						options={{
							title: "Meals",
							headerShown: false,
						}}
					/>
					<Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
					<Stack.Screen
						name="MealDetails"
						options={({ route }) => ({
							title: route.params.mealTitle,
							headerRight: () => {
								return (
									<View style={{ marginRight: 10 }}>
										<Button
											title="Favorite"
											onPress={() => {
												console.log("Marked as favorite!");
											}}
										/>
									</View>
								);
							},
						})}
						component={MealDetailsScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
