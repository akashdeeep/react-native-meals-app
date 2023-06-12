import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";

export default IconButton = (props) => {
	return (
		<Pressable
			onPress={props.onPress}
			style={({ pressed }) => pressed && styles.pressed}>
			<Ionicons name={props.icon} size={24} color={props.color} />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.5,
	},
});
