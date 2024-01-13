import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { CoursesSVG, ProfileSVG, SettingsSVG } from "./SVG";

export default function Footer({ navigation, selectedScreen }) {
	const pages = ["Courses", "Profile Screen", "Settings Screen"];

	const handlePress = (num) => {
		navigation.navigate(pages[num - 1]);
	};

	return (
		<View style={styles.footer}>
			<Pressable style={styles.container} onPress={() => handlePress(1)}>
				<CoursesSVG />
				<Text
					style={
						selectedScreen === 1
							? [styles.text, { color: "#E3562A" }]
							: styles.text
					}
				>
					وانەکان
				</Text>
			</Pressable>
			<Pressable style={styles.container} onPress={() => handlePress(2)}>
				<ProfileSVG />
				<Text
					style={
						selectedScreen === 2
							? [styles.text, { color: "#E3562A" }]
							: styles.text
					}
				>
					پڕۆفایل
				</Text>
			</Pressable>
			<Pressable style={styles.container} onPress={() => handlePress(3)}>
				<SettingsSVG />
				<Text
					style={
						selectedScreen === 3
							? [styles.text, { color: "#E3562A" }]
							: styles.text
					}
				>
					ڕێکبەندییەکان
				</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	footer: {
		position: "absolute",
		bottom: -25,
		flexDirection: "row-reverse",
		height: 102,
		width: "100%",
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "grey",
		paddingTop: 12,
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "white",
	},
	text: {
		fontSize: 16,
		color: "rgba(190, 186, 179, 1)",
	},
	selectedText: {
		fontSize: 16,
		color: "#E3562A",
	},
	container: {
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		width: "33%",
	},
});
