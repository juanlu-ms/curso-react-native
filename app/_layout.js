import { Stack, Link } from "expo-router";
import { View, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Logo, CircleInfoIcon } from "../components/Icons";

export default function Layout() {
	return (
		<>
			<StatusBar style="light" backgroundColor="black" />
			<View className="flex-1">
				<Stack
					//initialRouteName="index"
					screenOptions={{
						headerStyle: { backgroundColor: "black" },
						headerTintColor: "white",
						headerTitle: "",
						headerLeft: () => <Logo />,
						headerRight: () => (
							<Link asChild href={"/about"}>
								<Pressable className={`active:opacity-50`}>
									<CircleInfoIcon />
								</Pressable>
							</Link>
						),
					}}
				/>
			</View>
		</>
	);
}
