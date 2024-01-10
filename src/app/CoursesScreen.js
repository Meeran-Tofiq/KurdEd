import React, { useState } from "react";
import { View, Image, Text, FlatList, StyleSheet } from "react-native";
import CourseCard from "../components/CourseCard";
import courses from "../tests/__mocks__/courses";
import WelcomeHeader from "../components/WelcomeHeader";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

export default function CoursesScreen({ navigation }) {
	const [selectedScreen, setSelectedScreen] = useState(1);
	const hasSubscribed = true;

	return (
		<View>
			<View>
				<WelcomeHeader />
				<SearchBar />
			</View>
			<View>
				<Text>وانەی پێشنیار کراو :</Text>
			</View>
			<View>
				<FlatList
					renderItem={({ item: course }) => (
						<CourseCard course={course} hasSubscribed={hasSubscribed} />
					)}
					data={courses}
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
	flatlist: {
		width: "auto",
		height: 700,
	},
});
