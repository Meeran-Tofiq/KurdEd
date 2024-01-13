import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function LessonOption({ label, onPressFunc }) {
	return (
		<Pressable style={styles.container} onPress={onPressFunc}>
			<Text>{label}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderWidth: 1,
		borderColor: "rgba(190, 186, 179, 1)",
		borderRadius: 15,
		padding: 10,
	},
});
