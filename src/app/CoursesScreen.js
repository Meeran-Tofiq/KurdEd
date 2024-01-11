import React, { useState } from "react";
import { View, Image, Text, FlatList, StyleSheet } from "react-native";
import CourseCard from "../components/CourseCard";
import courses from "../tests/__mocks__/courses";
import WelcomeHeader from "../components/WelcomeHeader";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

export default function CoursesScreen({ navigation }) {
	const [filteredCourses, setFilteredCourses] = useState(courses);
	const [selectedScreen, setSelectedScreen] = useState(1);
	const hasSubscribed = true;

	return (
		<View>
			<View style={styles.content}>
				<View style={styles.header}>
					<View style={styles.headerContainer}>
						<WelcomeHeader />
					</View>
					<SearchBar
						filteredCourses={filteredCourses}
						setFilteredCourses={setFilteredCourses}
					/>
					<Text style={styles.suggestionText}>وانەی پێشنیار کراو:</Text>
				</View>
				<FlatList
					renderItem={({ item: course }) => (
						<CourseCard course={course} hasSubscribed={hasSubscribed} />
					)}
					data={filteredCourses}
					style={styles.flatlist}
				/>
			</View>
			<View>
				<Footer
					navigation={navigation}
					selectedScreen={selectedScreen}
					setSelectedScreen={setSelectedScreen}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	content: {
		padding: 15,
		height: "100%",
		alignItems: "center",
		paddingBottom: 75,
	},
	header: {
		height: "25%",
		width: "100%",
		justifyContent: "flex-end",
		gap: 15,
	},
	headerContainer: {
		width: "100%",
		flexDirection: "row-reverse",
		alignItems: "center",
	},
	suggestionText: {
		textAlign: "center",
	},
	flatlist: {
		width: "100%",
	},
});
