import { useRef, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, Animated } from "react-native";
import { getRandomNumber } from "../lib/numeros";
import { Score } from "./Score";

export function GameCard({ game }) {
	const [score, setScore] = useState([]);

	useEffect(() => {
		getRandomNumber().then((number) => {
			setScore(number);
		});
	}, []);

	return (
		<View
			className="flex-row bg-slate-700/30 p-4 rounded-xl gap-4 m-3 mb-8"
			key={game.id}
		>
			<Image source={{ uri: game.thumbnail }} style={styles.image} />
			<View>
				<View className="flex-row items-center gap-4 mb-2">
					<Text className="color-orange-500 text-xl font-bold">
						{game.title}
					</Text>
					<Score score={score} maxScore={100} />
				</View>
				<Text style={styles.genre}>{game.genre}</Text>
				<Text style={styles.platform}>{game.platform}</Text>
				<Text style={styles.publisher}>{game.publisher}</Text>
				<Text style={styles.developer}>{game.developer}</Text>
				<Text style={styles.date}>{game.release_date}</Text>
				<Text className="mt-3 flex-shrink-0" style={styles.description}>
					{game.short_description.slice(0, 100)}...
				</Text>
			</View>
		</View>
	);
}

export function AnimatedGameCard({ game }) {
	const opacity = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 500,
			delay: game.id * 200,
			useNativeDriver: true,
		}).start();
	}, [opacity, game.id]);

	return (
		<Animated.View style={{ opacity }}>
			<GameCard game={game} />
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	card: { marginBottom: 42, alignItems: "center" },

	image: { width: 130, height: 205, borderRadius: 10 },

	genre: { color: "#fff", fontSize: 12, marginTop: 5 },

	platform: { color: "#fff", fontSize: 12, marginTop: 5 },

	publisher: { color: "#fff", fontSize: 12, marginTop: 5 },

	developer: { color: "#fff", fontSize: 12, marginTop: 5 },

	date: { color: "#fff", fontSize: 12, marginTop: 5 },

	description: { color: "#fff", fontSize: 12 },
});
