import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./src/app/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "./src/app/IntroScreen";
import LoginScreen from "./src/app/LoginScreen";
import RegistrationScreen from "./src/app/RegistrationScreen";
import PlanScreen from "./src/app/PlanScreen";
import YearSelectionScreen from "./src/app/YearSelectionScreen";
import CourseDetailScreen from "./src/app/CourseDetailScreen";
import CourseLessonsScreen from "./src/app/CourseLessonsScreen";
import HomepageScreen from "./src/app/HomepageScreen";

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
				<Stack.Screen
					name="Homepage Screen"
					component={HomepageScreen}
				/>
				<Stack.Screen name="Login Page" component={LoginScreen} />
				<Stack.Screen
					name="Registration Page"
					component={RegistrationScreen}
				/>
				<Stack.Screen name="Plan Page" component={PlanScreen} />
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
