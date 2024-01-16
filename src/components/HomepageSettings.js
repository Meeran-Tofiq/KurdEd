import React from "react";
import { View, Image, Text, FlatList, StyleSheet } from "react-native";
import img from "../../assets/cool-kids-on-wheels.png";
import Footer from "../components/Footer";
import SettingsOptions from "../components/SettingsOptions";

export default function HomepageSettings({ navigation }) {
	return (
		<>
			<View style={styles.header}>
				<Text style={styles.headerText}>ڕێکبەندییەکان</Text>
			</View>
			<Image source={img} style={styles.image} />
			<SettingsOptions />
		</>
	);
}

const styles = StyleSheet.create({
	header: {
		marginBottom: 20,
	},
	headerText: {
		fontSize: 24,
	},
	image: {
		height: 250,
		width: 250,
	},
});
