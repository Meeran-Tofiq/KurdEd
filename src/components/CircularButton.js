import React from "react";
import { Pressable, StyleSheet, Image } from "react-native";

export default function CircularButton({
	navigation,
	isBackButton,
	image,
	onPressFunc,
}) {
	return (
		<Pressable style={styles.circularBtn} onPress={onPressFunc}>
			<Image source={image} style={styles.image} resizeMode="contain" />
		</Pressable>
	);
}

const styles = StyleSheet.create({
	circularBtn: {
		width: 58,
		height: 58,
		borderWidth: 1,
		borderColor: "rgba(190, 186, 179, 1)",
		borderRadius: 29,
		overflow: "hidden",
		padding: 5,
	},
	image: {
		flex: 1,
		width: null,
		height: null,
	},
});
