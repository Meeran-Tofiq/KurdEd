import React, { useState } from "react";
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import CourseCard from "../components/CourseCard";
import graduationImage from "../../assets/graduation-hat-small.png";
import courses from "../tests/__mocks__/courses";
import WelcomeHeader from "../components/WelcomeHeader";
import SearchBar from "../components/SearchBar";
import CircularButton from "../components/CircularButton";

export default function HomepageCourses({ navigation }) {
	const [filteredCourses, setFilteredCourses] = useState(courses);
	const hasSubscribed = true;

	const handleCoursePress = (course) => {
		navigation.navigate("Courses Detail Screen", { course });
	};

	return (
		<>
			<View style={styles.header}>
				<View style={styles.headerContainer}>
					<WelcomeHeader />
					<CircularButton
						image={graduationImage}
						onPressFunc={() => {
							navigation.navigate("Year Selection Screen");
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
					<TouchableOpacity onPress={() => handleCoursePress(course)}>
						<CourseCard
							course={course}
							hasSubscribed={hasSubscribed}
						/>
					</TouchableOpacity>
				)}
				data={filteredCourses}
				style={styles.flatlist}
			/>
		</>
	);
}

const styles = StyleSheet.create({
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
