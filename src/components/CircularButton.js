import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

export default function CircularButton({
	navigation,
	isBackButton,
	image,
	onPressFunc,
}) {
	return (
		<Pressable style={styles.circularBtn} onPress={onPressFunc}>
			<Image source={image} />
		</Pressable>
	);
}

const styles = StyleSheet.create({
	circularBtn: {
		position: "absolute",
		top: "10%",
		width: 48,
		height: 48,
	},
});
