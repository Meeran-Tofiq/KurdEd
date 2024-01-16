import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { CoursesSVG, ProfileSVG, SettingsSVG } from "./SVG";

export default function Footer({ selectedPage, setSelectedPage }) {
	const [courses, profile, settings] = [0, 1, 2];
	const handlePress = (num) => {
		setSelectedPage(num);
	};

	return (
		<View style={styles.footer}>
			<Pressable
				style={styles.container}
				onPress={() => handlePress(courses)}
			>
				<CoursesSVG isSelected={selectedPage === courses} />
				<Text
					style={
						selectedPage === courses
							? [styles.text, { color: "#E3562A" }]
							: styles.text
					}
				>
					وانەکان
				</Text>
			</Pressable>
			<Pressable
				style={styles.container}
				onPress={() => handlePress(profile)}
			>
				<ProfileSVG isSelected={selectedPage === profile} />
				<Text
					style={
						selectedPage === profile
							? [styles.text, { color: "#E3562A" }]
							: styles.text
					}
				>
					پڕۆفایل
				</Text>
			</Pressable>
			<Pressable
				style={styles.container}
				onPress={() => handlePress(settings)}
			>
				<SettingsSVG isSelected={selectedPage === settings} />
				<Text
					style={
						selectedPage === settings
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
		borderRadius: 12,
		borderWidth: 1,
		height: 102,
		width: "100%",
		borderColor: "grey",
		flexDirection: "row-reverse",
		justifyContent: "space-around",
		alignItems: "flex-start",
		backgroundColor: "white",
	},
	text: {
		fontSize: 16,
		color: "rgba(190, 186, 179, 1)",
	},
	container: {
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		width: "33%",
		gap: 5,
	},
});
