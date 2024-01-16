import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./src/app/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "./src/app/IntroScreen";
import CoursesScreen from "./src/app/CoursesScreen";
import LoginScreen from "./src/app/LoginScreen";
import RegistrationScreen from "./src/app/RegistrationScreen";
import PlanScreen from "./src/app/PlanScreen";
import ProfileScreen from "./src/app/ProfileScreen";
import SettingsScreen from "./src/app/SettingsScreen";
import YearSelectionScreen from "./src/app/YearSelectionScreen";
import CourseDetailScreen from "./src/app/CourseDetailScreen";
import CourseLessonsScreen from "./src/app/CourseLessonsScreen";

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
				<Stack.Screen
					name="Registration Page"
					component={RegistrationScreen}
				/>
				<Stack.Screen name="Plan Page" component={PlanScreen} />
				<Stack.Screen name="Profile Screen" component={ProfileScreen} />
				<Stack.Screen
					name="Settings Screen"
					component={SettingsScreen}
				/>
				<Stack.Screen
					name="Year Selection Screen"
					component={YearSelectionScreen}
				/>
				<Stack.Screen
					name="Courses Detail Screen"
					component={CourseDetailScreen}
				/>
				<Stack.Screen
					name="Course Lessons Screen"
					component={CourseLessonsScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
