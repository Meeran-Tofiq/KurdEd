import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import backButton from "../../assets/back-button.png";

export default function BackButton({ navigation, extraStyles }) {
	const handleBackButton = () => {
		navigation.goBack();
	};

	return (
		<TouchableOpacity style={extraStyles} onPress={handleBackButton}>
			<Image source={backButton} style={styles.button} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		position: "absolute",
		top: -110,
		left: 16,
		width: 48,
		height: 48,
	},
});
