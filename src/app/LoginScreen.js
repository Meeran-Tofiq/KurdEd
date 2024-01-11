import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TextInput } from "react-native";
import SkipButton from "../components/SkipButton";
import woman from "../../assets/kurdish-woman-holding-book.png";
import facebookLogo from "../../assets/facebook-logo.png";
import instagramLogo from "../../assets/instagram-logo.png";
import googleLogo from "../../assets/google-logo.png";
import TextField from "../components/TextField";
import ContinueButton from "../components/ContinueButton";

export default function LoginScreen({ navigation }) {
	const handleLoginButton = () => {
		navigation.navigate("Courses");
	};
	const handleRegisterButton = () => {
		navigation.navigate("Registration Page");
	};

	return (
		<View style={styles.container}>
			<SkipButton
				onPressFunc={() => navigation.navigate("Courses")}
				extraStyles={styles.skipButton}
			/>
			<View>
				<Image source={woman} style={styles.womanImage} />
			</View>

			<Text style={styles.loginHeader}>چوونە ژوورەوە</Text>
			<Text style={styles.loginSmallText}>بچۆرە ژووەرە بە یەکێک لەمانە</Text>

			<View style={styles.loginIconsContainer}>
				<Image source={facebookLogo} style={styles.loginIcon} />
				<Image source={instagramLogo} style={styles.loginIcon} />
				<Image source={googleLogo} style={styles.loginIcon} />
			</View>
			<View style={styles.inputContainer}>
				<TextField
					placeholder={"ئیمەیڵ"}
					autoCapitalize={"none"}
					extraStyles={styles.emailField}
				/>
				<TextField
					secureTextEntry={true}
					placeholder={"پاسوۆرد"}
					autoCapitalize={"none"}
				/>
			</View>
			<Text style={{ alignSelf: "center", marginTop: 16 }}>
				پاسوۆردت لە بیرکردووە؟
			</Text>
			<ContinueButton
				label={"چوونە ژوورەرە"}
				extraStyles={styles.loginButton}
				onPressFunc={handleLoginButton}
			/>
			<Text
				style={{ alignSelf: "center", marginTop: 16 }}
				onPress={handleRegisterButton}
			>
				خۆ تۆمارکردن
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	womanImage: {
		width: 215,
		height: 230,
	},
	skipButton: {
		top: 40,
		right: 20,
		backgroundColor: "rgb(217,217,217)",
		paddingHorizontal: 20,
		paddingVertical: 2,
		borderRadius: 20,
	},
	loginHeader: {
		fontSize: 24,
	},
	loginSmallText: {
		fontSize: 14,
		color: "rgba(120, 116, 109, 1)",
	},
	loginIconsContainer: {
		display: "flex",
		flexDirection: "row",
		gap: 24,
		marginTop: 10,
	},
	loginIcon: {
		width: 48,
		height: 48,
	},
	inputContainer: {
		gap: 16,
		width: "100%",
	},
	emailField: {
		marginTop: 16,
	},
	loginButton: {
		alignSelf: "center",
		marginTop: 16,
	},
});