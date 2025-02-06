import { useRef, useEffect } from "react";
import { Image, StyleSheet, Text, View, Animated } from "react-native";

export function GameCard({ game }) {
	return (
		<View key={game.id} style={styles.card}>
			<Image source={{ uri: game.thumbnail }} style={styles.image} />
			<Text style={styles.title}>{game.title}</Text>
			<Text style={styles.genre}>{game.genre}</Text>
			<Text style={styles.platform}>{game.platform}</Text>
			<Text style={styles.publisher}>{game.publisher}</Text>
			<Text style={styles.developer}>{game.developer}</Text>
			<Text style={styles.date}>{game.release_date}</Text>
			<Text style={styles.description}>{game.short_description}</Text>
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
	card: {
		marginBottom: 42,
		alignItems: "center",
	},

	image: {
		width: "100%",
		height: 200,
		borderRadius: 10,
	},

	title: {
		color: "rgba(255, 123, 8, 0.95)",
		fontSize: 16,
		fontWeight: "bold",
		marginTop: 10,
	},

	genre: {
		color: "#fff",
		fontSize: 12,
		marginTop: 5,
	},

	platform: {
		color: "#fff",
		fontSize: 12,
		marginTop: 5,
	},

	publisher: {
		color: "#fff",
		fontSize: 12,
		marginTop: 5,
	},

	developer: {
		color: "#fff",
		fontSize: 12,
		marginTop: 5,
	},

	date: {
		color: "#fff",
		fontSize: 12,
		marginTop: 5,
	},

	description: {
		color: "#fff",
		fontSize: 12,
		marginTop: 5,
		textAlign: "center",
	},
});
