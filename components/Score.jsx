import { View, Text } from "react-native";

export function Score({ score, maxScore }) {
	const getColor = () => {
		const percentage = (score / maxScore) * 100;

		if (percentage < 40) return "bg-red-500";
		else if (percentage < 70) return "bg-yellow-500";
		return "bg-green-500";
	};

	const className = getColor();

	return (
		<View
			className={`${className} w-10 h-10 rounded-full justify-center items-center`}
		>
			<Text className="text-xl font-bold text-black">{score}</Text>
		</View>
	);
}
