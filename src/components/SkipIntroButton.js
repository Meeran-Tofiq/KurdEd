import React from "react";
import { StyleSheet, Pressable } from "react-native";

export default function SkipIntroButton({}) {
	return (
		<Pressable onPress={onPressFunc} styles={[styles.button, extraStyles]}>
			<Text>پەڕاندن</Text>
		</Pressable>
	);
}
const styles = StyleSheet.create({
	button: {
		position: "absolute",
		top: 60,
		right: 16,
	},
	text: {
		justifyContent: "flex-end",
		color: "rgba(120,116,109,1)",
		fontSize: 14,
		fontWeight: "500",
		textAlign: "right",
	},
});
