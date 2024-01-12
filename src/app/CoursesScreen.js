import React, { useState } from "react";
import { View, Image, Text, FlatList, StyleSheet } from "react-native";
import CourseCard from "../components/CourseCard";
import graduationImage from "../../assets/graduation-hat-small.png";
import courses from "../tests/__mocks__/courses";
import WelcomeHeader from "../components/WelcomeHeader";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import CircularButton from "../components/CircularButton";

export default function CoursesScreen({ navigation }) {
	const [filteredCourses, setFilteredCourses] = useState(courses);
	const hasSubscribed = true;

	return (
		<View>
			<View style={styles.content}>
				<View style={styles.header}>
					<View style={styles.headerContainer}>
						<WelcomeHeader />
						<CircularButton
							image={graduationImage}
							onPressFunc={() => {
								navigation.navigate("Grade Selection Screen");
							}}
						/>
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
				<Footer navigation={navigation} selectedScreen={1} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	content: {
		height: "100%",
		padding: 15,
		paddingTop: 25,
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
		justifyContent: "space-between",
	},
	suggestionText: {
		textAlign: "center",
	},
	flatlist: {
		width: "100%",
	},
});
