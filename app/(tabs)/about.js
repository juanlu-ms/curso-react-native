import { Stack } from "expo-router";
import { ScrollView, Text } from "react-native";
import { Screen } from "../../components/Screen";

export default function About() {
	return (
		<Screen>
			<Stack.Screen
				options={{
					headerLeft: () => null,
					headerTitle: "Sobre nosotros",
					headerRight: () => null,
				}}
			/>
			<ScrollView>
				<Text className="text-white font-bold mb-8 text-2xl">
					Sobre el proyecto
				</Text>

				<Text className="text-white/90 mb-4">
					lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur.
				</Text>

				<Text className="text-white/90 mb-4">
					lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur.
				</Text>

				<Text className="text-white/90 mb-4">
					lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur.
				</Text>

				<Text className="text-white/90 mb-4">
					lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur.
				</Text>

				<Text className="text-white/90 mb-4">
					lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur.
				</Text>
			</ScrollView>
		</Screen>
	);
}
