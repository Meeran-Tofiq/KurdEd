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
		<View style={styles.searchBar}>
			<TextInput
				style={styles.searchInput}
				value={searchQuery}
				placeholder="گەڕان بۆ وانە..."
				onChangeText={handleSearch}
			/>
			<Pressable onPress={onSearchFunc} style={styles.searchButton}>
				<Text>SEARCH</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	searchBar: {
		borderRadius: 12,
		borderWidth: 1,
		padding: 10,
		flexDirection: "row-reverse",
		borderColor: "rgba(190, 186, 179, 1)",
		alignItems: "center",
		justifyContent: "space-between",
	},
	searchInput: {
		flex: 1,
	},
	searchButton: {
		marginHorizontal: 5,
	},
});
