import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import LessonDropDown from "../components/LessonDropDown";

export default function CourseLessonsScreen({ navigation, course }) {
	return (
		<View style={styles.contaienr}>
			<FlatList
				data={course.sections}
				renderItem={({ item: section }) => (
					<LessonDropDown
						dropdownLabel={section.label}
						lessonSection={section}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
