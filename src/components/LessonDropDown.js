import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import LessonOption from "./LessonOption";

export default function LessonDropDown({ navigation, dropdownLabel, lessons }) {
	const [isVisible, setIsVisible] = useState(false);
	return (
		<View style={styles.container}>
			<Pressable
				style={styles.dropdown}
				onPress={() => setIsVisible(!isVisible)}
			>
				<Text>{dropdownLabel}</Text>
			</Pressable>

			<View
				style={
					isVisible
						? styles.lessons
						: [styles.lessons, { height: 0, opacity: 0 }]
				}
			>
				{lessons.map((lesson, i) => {
					return (
						<LessonOption
							key={i}
							label={lesson.label}
							onPressFunc={() => navigation.navigate(lesson.link)}
						/>
					);
				})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
		width: "100%",
		alignItems: "center",
		gap: 10,
	},
	dropdown: {
		borderWidth: 1,
		borderColor: "rgba(190, 186, 179, 1)",
		borderRadius: 20,
		padding: 15,
		width: "100%",
	},
	lessons: {
		width: "90%",
		gap: 10,
	},
});
