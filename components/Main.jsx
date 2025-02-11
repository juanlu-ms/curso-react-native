import React, { useEffect, useState } from "react";
import { Link } from "expo-router";

import { FlatList, View, Pressable, ActivityIndicator } from "react-native";
import { getLatestGames } from "../lib/metacritic.js";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard.jsx";
import { Logo } from "./Icons.jsx";
import { CircleInfoIcon } from "./Icons.jsx";

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
			<View className="flex-row justify-between items-center m-4 mt-6">
				<View>
					<Logo />
				</View>

				<Link asChild href={"/about"}>
					<Pressable className={`active:opacity-50`}>
						<CircleInfoIcon />
					</Pressable>
				</Link>
			</View>
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
