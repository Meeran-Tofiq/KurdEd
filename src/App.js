import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./app/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "./app/IntroScreen";
import CoursesScreen from "./app/CoursesScreen";
import LoginScreen from "./app/LoginScreen";
import ProfileScreen from "./app/ProfileScreen";
import SettingsScreen from "./app/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Splash Screen" component={SplashScreen} />
				<Stack.Screen name="Intro Pages" component={IntroScreen} />
				<Stack.Screen name="Courses" component={CoursesScreen} />
				<Stack.Screen name="Login Page" component={LoginScreen} />
				<Stack.Screen name="Profile Screen" component={ProfileScreen} />
				<Stack.Screen name="Settings Screen" component={SettingsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
