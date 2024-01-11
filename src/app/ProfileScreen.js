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
			<View style={styles.header}>
				<Text style={styles.headerText}>پڕۆفایل</Text>
			</View>
			<View style={styles.content}>
				<View style={styles.profilePicContainer}>
					<Image style={styles.profilePic} source={img} />
				</View>
				<View style={styles.buttonContainer}>
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
				<Text style={styles.removeAccountText}>لابردنی ئەژمێر</Text>
			</View>
			<Footer navigation={navigation} selectedScreen={2} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		paddingTop: "7%",
	},
	header: {
		padding: 20,
		alignItems: "center",
	},
	headerText: {
		fontFamily: "sans-serif",
		fontSize: 24,
		fontWeight: "700",
	},
	content: {
		flex: 1,
		alignItems: "center",
	},
	profilePicContainer: {
		width: 140,
		height: 140,
		overflow: "hidden",
		borderRadius: 70,
		borderWidth: 2,
		borderColor: "#65AAEA",
		marginBottom: 50,
	},
	profilePic: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
	buttonContainer: {
		width: "100%",
		alignItems: "center",
		gap: 10,
		marginBottom: 15,
	},
	removeAccountText: {
		color: "#78746D",
	},
});
