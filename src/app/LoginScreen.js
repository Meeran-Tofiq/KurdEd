import React, { useState } from "react";
import {
	View,
	Image,
	Text,
	StyleSheet,
	TextInput,
	Pressable,
} from "react-native";
import SkipButton from "../components/SkipButton";
import woman from "../../assets/kurdish-woman-holding-book.png";
import facebookLogo from "../../assets/facebook-logo.png";
import instagramLogo from "../../assets/instagram-logo.png";
import googleLogo from "../../assets/google-logo.png";
import TextField from "../components/TextField";
import ContinueButton from "../components/ContinueButton";

export default function LoginScreen({ navigation }) {
	const [hasSubscribed, setHasSubscribed] = useState(true);

	const handleLoginButton = () => {
		navigation.navigate("Homepage Screen", { hasSubscribed: true });
	};

	const handleSkipButton = () => {
		setHasSubscribed(false);
		navigation.navigate("Homepage Screen", { hasSubscribed: false });
	};

	const handleRegisterButton = () => {
		navigation.navigate("Registration Page");
	};

	return (
		<View style={styles.container}>
			<SkipButton
				onPressFunc={handleSkipButton}
				extraStyles={styles.skipButton}
			/>
			<Image source={woman} style={styles.womanImage} />

			<View>
				<Text style={styles.loginHeader}>چوونە ژوورەوە</Text>
				<Text style={styles.loginSmallText}>
					بچۆرە ژووەرە بە یەکێک لەمانە
				</Text>
			</View>

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

			<Text>پاسوۆردت لە بیرکردووە؟</Text>

			<ContinueButton
				label={"چوونە ژوورەرە"}
				extraStyles={styles.loginButton}
				onPressFunc={handleLoginButton}
			/>

			<Pressable onPress={handleRegisterButton}>
				<Text>خۆ تۆمارکردن</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: "20%",
		gap: 16,
	},
	womanImage: {
		width: 215,
		height: 230,
	},
	skipButton: {
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
	},
	loginIcon: {
		width: 48,
		height: 48,
	},
	inputContainer: {
		gap: 16,
		width: "100%",
	},
	emailField: {},
	loginButton: {
		alignSelf: "center",
	},
});
