import React, { useState } from "react";
import { View, TextInput, Image, StyleSheet, Button } from "react-native";

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
			<Button onPress={onSearchFunc} title="SEARCH" />
		</View>
	);
}

const styles = StyleSheet.create({
	searchInput: {},
});
