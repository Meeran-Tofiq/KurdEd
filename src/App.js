import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./components/app/SpashScreen";

export default function App() {
	return (
		<View style={styles.container}>
			<View>
				<SplashScreen />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
