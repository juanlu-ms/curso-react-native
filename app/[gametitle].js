import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { Screen } from "../components/Screen";

export default function Detail() {
	const { gametitle } = useLocalSearchParams();
	console.log(useLocalSearchParams());

	return (
		<Screen>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#ff7000" },
					headerLeft: () => {},
					headerTitle: `${gametitle}`,
					headerRight: () => {},
				}}
			/>
			<View>
				<Text className="text-white font-bold mb-8 text-2xl">
					Detalle del juego {gametitle}
				</Text>
				<Link href="/" className="text-blue-400">
					Volver a inicio
				</Link>
			</View>
		</Screen>
	);
}
