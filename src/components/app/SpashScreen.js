import React from "react";
import ContinueButton from "../common/ContinueButton";
import { StyleSheet, View, Image, Text } from "react-native";

export default function SplashScreen() {
	return (
		<View style={styles.SplashScreen}>
			<View style={styles.Content}>
				<Image
					style={styles.Illustration}
					source={require("../../../assets/kurdish-man-holding-book.png")}
				/>
				<View style={styles.TextContent}>
					<View style={styles.Title}>
						<Text style={styles.Text}>KURD ED</Text>
					</View>
				</View>
			</View>
			<ContinueButton
				label={"دەستپێبکە"}
				onPressFunc={() => {}}
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
});
