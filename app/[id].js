import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import {
	ActivityIndicator,
	Text,
	View,
	ScrollView,
	Image,
	Pressable,
} from "react-native";
import { Screen } from "../components/Screen";
import { getGameDetailsById } from "../lib/metacritic";
import { Score } from "../components/Score";
import { getRandomNumber } from "../lib/numeros";

export default function Detail() {
	const { id } = useLocalSearchParams();
	const [gameInfo, setGameInfo] = useState(null);
	const [score, setScore] = useState([]);

	useEffect(() => {
		if (id) {
			getGameDetailsById(id).then((data) => {
				setGameInfo(data);
			});
		}
	}, [id]);

	useEffect(() => {
		getRandomNumber().then((number) => {
			setScore(number);
		});
	}, []);

	return (
		<>
			<StatusBar style="dark" backgroundColor="#ff7000" />
			<Screen>
				<Stack.Screen
					options={{
						headerStyle: { backgroundColor: "#ff7000" },
						headerTitleStyle: { fontWeight: "bold" },
						headerTintColor: "black",
						headerLeft: () => null,
						headerTitle: `${gameInfo?.title}`,
						headerRight: () => null,
					}}
				/>
				<View className="mt-4">
					{gameInfo === null ?
						<ActivityIndicator size={"large"} color={"rgb(255, 255, 255)"} />
					:	<ScrollView>
							<View className="items-center justify-center">
								<Image
									className="mb-4"
									source={{ uri: gameInfo.thumbnail }}
									style={{ width: 260, height: 290, borderRadius: 10 }}
								/>
								<Score score={score} maxScore={100} />
								<Text className="text-orange-500 font-bold text-center mt-3 mb-2 text-2xl">
									{gameInfo.title}
								</Text>
								<View className="w-full flex flex-row items-start flex-wrap">
									<View className="pl-8 mb-6">
										<View className="flex flex-row items-start">
											<Text className="text-orange-500 text-xl">
												Developer:
											</Text>
											<Text className="text-white text-xl pl-3">
												{gameInfo.developer}
											</Text>
										</View>
										<View className="flex flex-row items-start">
											<Text className="text-orange-500 text-xl">
												Release date :
											</Text>
											<Text className="text-white text-xl pl-3">
												{gameInfo.release_date}
											</Text>
										</View>
										<View className="flex flex-row items-start">
											<Text className="text-orange-500 text-xl">Genre:</Text>
											<Text className="text-white text-xl pl-3">
												{gameInfo.genre}
											</Text>
										</View>
										<View className="flex flex-row items-start">
											<Text className="text-orange-500 text-xl">Platform:</Text>
											<Text className="text-white text-xl pl-3">
												{gameInfo.platform}
											</Text>
										</View>
									</View>
									<Link
										asChild
										href={`${gameInfo.game_url}`}
										className="ml-16 mt-15"
									>
										<Pressable className="bg-orange-500 p-2 rounded-lg mb-4">
											<Text className="text-black text-xl font-bold px-2">
												PLAY
											</Text>
										</Pressable>
									</Link>
								</View>
								<Text className="text-white/90 text-left text-lg p-4 mb-8">
									{gameInfo.description}
								</Text>
							</View>
						</ScrollView>
					}
				</View>
			</Screen>
		</>
	);
}
