import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Detail() {
	const { id } = useLocalSearchParams();

	return (
		<View className="flex-1 justify-center items-center bg-black">
			<View>
				<Text className="text-white font-bold mb-8 text-2xl">
					Detalle del juego {id}
				</Text>
				<Link href="/" className="text-blue-400">
					Volver a inicio
				</Link>
			</View>
		</View>
	);
}
