import { Stack } from "expo-router";
import { View } from "react-native";

export default function Layout() {
	return (
		<View className="flex-1">
			<Stack
				initialRouteName="index"
				screenOptions={{
					headerStyle: { backgroundColor: "black" },
					headerTintColor: "white",
				}}
			/>
		</View>
	);
}
