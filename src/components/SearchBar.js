import React, { useState } from "react";
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";
import courses from "../tests/__mocks__/courses";

export default function SearchBar({
	onSearchFunc,
	filteredCourses,
	setFilteredCourses,
}) {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (text) => {
		setSearchQuery(text);
		if (text) {
			const newData = filteredCourses.filter((item) => {
				const itemData = item.title ? item.title : "";
				const textData = text;
				return itemData.indexOf(textData) > -1;
			});
			setFilteredCourses(newData);
		} else {
			setFilteredCourses(courses);
		}
	};

	return (
		<View>
			<TextInput
				style={styles.searchInput}
				value={searchQuery}
				placeholder="گەڕان بۆ وانە..."
				onChangeText={handleSearch}
			/>
			<Pressable onPress={onSearchFunc}>
				<Text>SEARCH</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	searchInput: {},
});
