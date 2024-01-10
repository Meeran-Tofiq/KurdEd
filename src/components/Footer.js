import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Footer({ navigation }) {
	return (
		<View style={styles.footer}>
			<Pressable style={styles.classesContainer}>
				<Text style={styles.classes}>وانەکان</Text>
			</Pressable>
			<Pressable style={styles.profileContainer}>
				<Text style={styles.profile}>پڕۆفایل</Text>
			</Pressable>
			<Pressable style={styles.settingsContainer}>
				<Text style={styles.settings}>ڕێکبەندییەکان</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	footer: {},
	classesContainer: {},
	classes: {},
	profileContainer: {},
	profile: {},
	settingsContainer: {},
	settings: {},
});
