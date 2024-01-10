import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Footer({ navigation }) {
	return (
		<View style={styles.footer}>
			<View style={styles.classesContainer}>
				<Text style={styles.classes}>وانەکان</Text>
			</View>
			<View style={styles.profileContainer}>
				<Text style={styles.profile}>پڕۆفایل</Text>
			</View>
			<View style={styles.settingsContainer}>
				<Text style={styles.settings}>ڕێکبەندییەکان</Text>
			</View>
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
