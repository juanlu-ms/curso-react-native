import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View, ScrollView, Image } from "react-native";
import { Screen } from "../components/Screen";
import { getGameDetailsById } from "../lib/metacritic";

export default function Detail() {
	const { id } = useLocalSearchParams();
	const [gameInfo, setGameInfo] = useState(null);

	useEffect(() => {
		if (id) {
			getGameDetailsById(id).then((data) => {
				setGameInfo(data);
			});
		}
	}, [id]);

	return (
		<Screen>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#ff7000" },
					headerLeft: () => null,
					headerTitle: `${gameInfo?.title}`,
					headerRight: () => null,
				}}
			/>
			<View className="mt-4">
				{gameInfo === null ?
					<ActivityIndicator size={"large"} color={"rgb(255, 255, 255)"} />
				:	<ScrollView>
						<Image
							source={{ uri: gameInfo.thumbnail }}
							style={{ width: "40%", height: 200, borderRadius: 10 }}
						/>
						<Text className="text-white font-bold mb-8 text-2xl">
							Detalle del juego {id} con cosas {gameInfo.title},{" "}
							{gameInfo.genre}
						</Text>
					</ScrollView>
				}
			</View>
		</Screen>
	);
}
