import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TextField from "../components/TextField";
import ContinueButton from "../components/ContinueButton";
import BackButton from "../components/BackButton";

export default function RegistrationScreen({ navigation }) {
	const handleRegisterButton = () => {
		navigation.navigate("Plan Page");
	};
	return (
		<View style={styles.container}>
			<BackButton navigation={navigation} />

			<View style={styles.registrationContainer}>
				<Text style={styles.mainText}>خۆ تۆمارکردن</Text>
				<Text style={styles.secondaryText}>هەژمارێکی نوێ دروست بکە</Text>
				<TextField placeholder={"ناو"} />
				<TextField placeholder={"ژمارەی تەلەفون"} keyboardType={"numeric"} />
				<TextField placeholder={"ئیمەیڵ"} autoCapitalize={"none"} />
				<TextField
					placeholder={"پاسوۆرد"}
					secureTextEntry={true}
					autoCapitalize={"none"}
				/>

				<ContinueButton
					label={"خۆ تۆمارکردن"}
					extraStyles={styles.registerButton}
					onPressFunc={handleRegisterButton}
				/>

				<Text style={styles.loginButton} onPress={() => navigation.goBack()}>
					چوونە ژوورەرە
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	registrationContainer: {
		gap: 16,
	},
	mainText: {
		fontWeight: "bold",
		fontSize: 24,
		alignSelf: "center",
	},
	secondaryText: {
		fontSize: 16,
		alignSelf: "center",
	},
	registerButton: {
		alignSelf: "center",
		width: "90%",
	},
	loginButton: {
		alignSelf: "center",
		fontSize: 16,
	},
});
