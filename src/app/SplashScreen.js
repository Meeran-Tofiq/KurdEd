import React from "react";
import ContinueButton from "../components/ContinueButton";
import { StyleSheet, View, Image, Text } from "react-native";
import img from "../../assets/kurdish-man-holding-book.png";

export default function SplashScreen({ navigation }) {
	return (
		<View style={styles.SplashScreen}>
			<View style={styles.Content}>
				<Image style={styles.Illustration} source={img} />
				<View>
					<View style={styles.Title}>
						<Text style={styles.Text}>KURD ED</Text>
					</View>
					<Text style={styles.textContent}>داهاتووت بنیاد بنێ!</Text>
				</View>
			</View>
			<ContinueButton
				label={"دەستپێبکە"}
				onPressFunc={() => navigation.navigate("Intro Pages")}
				extraStyles={styles.Button}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	SplashScreen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	Content: {
		marginTop: "auto",
		marginBottom: "auto",
		gap: 10,
	},
	Text: {
		color: "rgba(60,58,54,1)",
		fontSize: 40,
		fontWeight: "700",
		textAlign: "center",
	},
	Button: {
		marginBottom: 32,
	},
	textContent: {
		fontSize: 18,
		textAlign: "center",
	},
});
