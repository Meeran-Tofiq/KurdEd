import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import img from "../../assets/cool-kids-smile.png";
import Footer from "../components/Footer";
import ProfileRedirectButton from "../components/ProfileRedirectButton";

export default function ProfileScreen({ navigation }) {
	const profileBtns = [
		{ label: "وانەکانم", redirectLink: "My Courses Screen", key: 0 },
		{ label: "بیرخەرەوە", redirectLink: "Reminders Screen", key: 1 },
		{ label: "پارەدان", redirectLink: "Payment Screen", key: 2 },
	];
	return (
		<View style={styles.container}>
			<View style={styles.profileScreen}>
				<Image style={styles.profilePic} source={img}></Image>
				{profileBtns.map((btnInfo) => {
					return (
						<ProfileRedirectButton
							navigation={navigation}
							redirectLink={btnInfo.redirectLink}
							label={btnInfo.label}
							key={btnInfo.key}
						/>
					);
				})}
			</View>
			<Footer navigation={navigation} selectedScreen={2} />
		</View>
	);
}

const styles = StyleSheet.create({});
