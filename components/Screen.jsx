import { View } from "react-native";

export function Screen({ children }) {
	return <View className="flex-1 bg-black p-3">{children}</View>;
}
