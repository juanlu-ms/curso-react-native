import React, { useEffect, useState } from "react";

import { FlatList, View, ActivityIndicator } from "react-native";
import { getLatestGames } from "../lib/metacritic.js";
import { AnimatedGameCard } from "./GameCard.jsx";
import { Screen } from "./Screen.jsx";

export function Main() {
	const [games, setGames] = useState([]);

	useEffect(() => {
		getLatestGames().then((games) => {
			const sortedGames = games.sort((a, b) => a.id - b.id);
			setGames(sortedGames);
		});
	}, []);

	return (
		<Screen>
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
		</Screen>
	);
}
