import React from "react";
import { View, Image, Text, FlatList, StyleSheet } from "react-native";
import img from "../../assets/cool-kids-on-wheels.png";
import Footer from "../components/Footer";
import SettingsOptions from "../components/SettingsOptions";

export default function SettingsScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				{/* Arrow to go back */}
				<Text style={styles.headerText}>ڕێکبەندییەکان</Text>
			</View>
			<Image source={img} style={styles.image} />
			<SettingsOptions />
			<Footer navigation={navigation} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		marginTop: "10%",
		paddingBottom: 75,
	},
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
