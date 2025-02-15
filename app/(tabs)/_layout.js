import { Tabs } from "expo-router";

import { HomeIcon, CircleInfoIcon } from "../../components/Icons";

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: { backgroundColor: "black", borderColor: "black" },
				tabBarActiveTintColor: "#ff7000",
				tabBarInactiveTintColor: "gray",
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => <HomeIcon color={color} />,
				}}
			/>
			<Tabs.Screen
				name="about"
				options={{
					title: "About",
					tabBarIcon: ({ color }) => <CircleInfoIcon color={color} />,
				}}
			/>
		</Tabs>
	);
}
