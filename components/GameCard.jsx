import { useRef, useEffect, useState } from "react";
import {
	Image,
	StyleSheet,
	Text,
	View,
	Animated,
	Pressable,
} from "react-native";
import { getRandomNumber } from "../lib/numeros";
import { Score } from "./Score";
import { Link } from "expo-router";

export function GameCard({ game }) {
	const [score, setScore] = useState([]);

	useEffect(() => {
		getRandomNumber().then((number) => {
			setScore(number);
		});
	}, []);

	return (
		<Link href={`/${game.id}`} asChild>
			<Pressable
				className="active:opacity-50 border border-black active:border-white/50 m-3
					 bg-slate-700/30 p-4 rounded-xl"
			>
				<View className="flex-row  gap-4" key={game.id}>
					<Image source={{ uri: game.thumbnail }} style={styles.image} />
					<View className="flex-shrink">
						<View className="flex-row items-center gap-4 mb-2">
							<View className="flex-shrink">
								<Text className="color-orange-500 text-xl font-bold">
									{game.title}
								</Text>
							</View>
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
			</Pressable>
		</Link>
	);
}

export function AnimatedGameCard({ game }) {
	const opacity = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 100,
			delay: game.id * 100,
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
