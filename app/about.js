import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../components/Icons";
import { Screen } from "../components/Screen";

export default function About() {
	return (
		<Screen>
			<ScrollView>
				<Link asChild href={"/"}>
					<Pressable className={`active:opacity-50`}>
						<HomeIcon />
					</Pressable>
				</Link>

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
