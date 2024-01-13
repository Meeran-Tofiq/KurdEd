import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./app/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "./app/IntroScreen";
import CoursesScreen from "./app/CoursesScreen";
import LoginScreen from "./app/LoginScreen";
import RegistrationScreen from "./app/RegistrationScreen";
import PlanScreen from "./app/PlanScreen";
import ProfileScreen from "./app/ProfileScreen";
import SettingsScreen from "./app/SettingsScreen";
import YearSelectionScreen from "./app/YearSelectionContainer";

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
				<Stack.Screen name="Registration Page" component={RegistrationScreen} />
				<Stack.Screen name="Plan Page" component={PlanScreen} />
				<Stack.Screen name="Profile Screen" component={ProfileScreen} />
				<Stack.Screen name="Settings Screen" component={SettingsScreen} />
				<Stack.Screen
					name="Year Selection Screen"
					component={YearSelectionScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
