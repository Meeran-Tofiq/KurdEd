import React from "react";
import { VIew, Image, Text, FlatList } from "react-native";
import img from "../../assets/cool-kids-on-wheels.png";
import Footer from "../components/Footer";

export default function SettingsScreen({}) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				{/* Arrow to go back */}
				<Text style={styles.headerText}>ڕێکبەندییەکان</Text>
			</View>
			<Image source={img} style={styles.image} />
			<FlatList />
			<Footer />
		</View>
	);
}
