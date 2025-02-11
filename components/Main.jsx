import React, { useEffect, useState } from "react";

import { FlatList, View, ActivityIndicator } from "react-native";
import { getLatestGames } from "../lib/metacritic.js";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard.jsx";

export function Main() {
	const [games, setGames] = useState([]);
	const insets = useSafeAreaInsets();

	useEffect(() => {
		getLatestGames().then((games) => {
			const sortedGames = games.sort((a, b) => a.id - b.id);
			setGames(sortedGames);
		});
	}, []);

	return (
		<View
			className="bg-black"
			style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
		>
			{games.length === 0 ?
				<View
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<ActivityIndicator size={"large"} color={"rgb(255, 255, 255)"} />
				</View>
			:	<FlatList
					data={games}
					keyExtractor={(game) => game.id}
					renderItem={({ item }) => <AnimatedGameCard game={item} />}
				></FlatList>
			}
		</View>
	);
}
