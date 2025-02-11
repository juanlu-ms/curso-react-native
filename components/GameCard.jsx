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
		<Link href={`/${game.title}`} asChild>
			<Pressable
				className="active:opacity-50 border border-black active:border-white/50 m-3
					 bg-slate-700/30 p-4 rounded-xl"
			>
				<View className="flex-row  gap-4" key={game.id}>
					<Image source={{ uri: game.thumbnail }} style={styles.image} />
					<View className="flex-shrink">
						<Text className="color-orange-500 text-2xl font-bold mb-2">
							{game.title}
						</Text>
						<Score score={score} maxScore={100} />
						<Text
							className="mt-5 flex-shrink-0 text-lg text-white"
							style={styles.description}
						>
							{game.short_description.slice(0, 70)}...
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
	image: { width: 130, height: 170, borderRadius: 10 },
});
