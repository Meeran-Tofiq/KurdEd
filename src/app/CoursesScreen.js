import React from "react";
import { View, Image, Text, FlatList, StyleSheet } from "react-native";
import CourseCard from "../components/CourseCard";
import courses from "../tests/__mocks__/courses";
import WelcomeHeader from "../components/WelcomeHeader";

export default function CoursesScreen() {
	const hasSubscribed = true;

	return (
		<View>
			<WelcomeHeader />
			<FlatList
				renderItem={({ item: course }) => (
					<CourseCard course={course} hasSubscribed={hasSubscribed} />
				)}
				data={courses}
				style={styles.flatlist}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	flatlist: {
		width: "auto",
		height: 700,
	},
});
