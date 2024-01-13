import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function LessonOption({ label, onPressFunc }) {
	return (
		<Pressable style={styles.container} onPress={onPressFunc}>
			<Text>{label}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({});
