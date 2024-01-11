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
			{label}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	redirectBtn: {},
});
