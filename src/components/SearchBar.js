import React, { useState } from "react";
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";

export default function SearchBar({ onSearchFunc }) {
	const [value, setValue] = useState("");

	const handleChangeText = (query) => {
		setValue(query);
	};

	return (
		<View>
			<TextInput
				style={styles.searchInput}
				placeholder="گەڕان بۆ وانە..."
				value={value}
				onChangeText={handleChangeText}
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
