import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import LessonDropDown from "../components/LessonDropDown";

export default function CourseLessonsScreen({ navigation, route }) {
	const { course } = route.params;

	return (
		<View style={styles.contaienr}>
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

const styles = StyleSheet.create({});
