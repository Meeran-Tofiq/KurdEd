import React from "react";
import { View, Image, Text } from "react-native";
import img from "../../assets/cool-kids-smile.png";

export default function ProfileScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Image style={styles.profilePic} source={img}></Image>
		</View>
	);
}
