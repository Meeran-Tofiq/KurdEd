import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import LessonDropDown from "../components/LessonDropDown";

export default function CourseLessonsScreen({ navigation, route }) {
	const { course } = route.params;

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>{course.title}</Text>
			</View>
			<FlatList
				data={course.sections}
				renderItem={({ item: section }) => (
					<LessonDropDown
						navigation={navigation}
						dropdownLabel={section.label}
						lessons={section.lessons}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		gap: 20,
	},
	header: {
		borderBottomWidth: 1,
		borderColor: "rgba(190, 186, 179, 1)",
		width: "100%",
		alignItems: "center",
		padding: 15,
		marginTop: "8%",
	},
	title: {
		fontSize: 20,
		width: "80%",
		textAlign: "center",
	},
});
