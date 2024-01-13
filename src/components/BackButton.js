import React from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	Image,
	Pressable,
} from "react-native";
import backButton from "../../assets/back-button.png";

export default function BackButton({ navigation }) {
	const handleBackButton = () => {
		navigation.goBack();
	};

	return (
		<Pressable style={styles.button} onPress={handleBackButton}>
			<Image
				source={backButton}
				style={styles.image}
				resizeMode="contain"
			/>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 48,
		height: 48,
	},
	image: {
		flex: 1,
		width: null,
		height: null,
	},
});
