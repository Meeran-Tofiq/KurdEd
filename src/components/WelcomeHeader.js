import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function WelcomeHeader({ username }) {
	return (
		<View style={styles.welcomeHeader}>
			<View style={styles.greetingContainer}>
				<Text style={styles.greetingContainer}>{username ? "سڵاو،" : ""}</Text>
			</View>
			<View style={styles.usernameContainer}>
				<Text style={styles.username}>{username || "بەخێربێیت"}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	welcomeHeader: {},
	greetingContainer: {},
	usernameContainer: {},
	greeting: {},
	username: {},
});
