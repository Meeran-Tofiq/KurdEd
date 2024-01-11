import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import img from "../../assets/cool-kids-smile.png";
import Footer from "../components/Footer";

export default function ProfileScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Image style={styles.profilePic} source={img}></Image>
			<Footer navigation={navigation} selectedScreen={2} />
		</View>
	);
}

const styles = StyleSheet.create({});
