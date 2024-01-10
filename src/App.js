import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./app/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro from "./app/Intro";
import CoursesScreen from "./app/CoursesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={SplashScreen} />
				<Stack.Screen name="Intro Pages" component={Intro} />
				<Stack.Screen name="Courses" component={CoursesScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
