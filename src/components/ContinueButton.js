import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

export default function ContinueButton({ label, onPressFunc, extraStyles }) {
	return (
		<Pressable style={[styles.Button, extraStyles]} onPress={onPressFunc}>
			<Text style={styles.Text}>{label}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	Button: {
		width: "80%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		boxSizing: "border-box",
		backgroundColor: "rgba(227,86,42,1)",
		borderRadius: 16,
		padding: 16,
	},
	Text: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		color: "rgba(255,255,255,1)",
		fontSize: 20,
		fontWeight: "500",
		textAlign: "center",
	},
});
