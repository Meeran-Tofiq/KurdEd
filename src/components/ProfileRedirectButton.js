import React from "react";
import { View, Image, Text, Pressable, StyleSheet } from "react-native";

export default function ProfileRedirectButton({
	navigation,
	redirectLink,
	label,
}) {
	return (
		<Pressable
			style={styles.redirectBtn}
			onPress={() => navigation.navigate(redirectLink)}
		>
			<Text style={styles.btnText}>{label}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	redirectBtn: {
		borderRadius: 15,
		borderWidth: 1,
		borderColor: "grey",
		padding: 25,
		width: "80%",
		alignItems: "center",
	},
	btnText: {
		fontSize: 22,
		fontWeight: "700",
	},
});
