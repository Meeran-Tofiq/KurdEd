import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ContinueButton from "../components/ContinueButton";
import graduationHatImage from "../../assets/graduation-hat-small.png";

export default function YearSelectionScreen({ navigation }) {
	const years = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={graduationHatImage} />
				<Text>قۆناغەکان :</Text>
			</View>
			<View style={styles.yearsContainer}>
				{years.map((year) => {
					return (
						<ContinueButton
							extraStyles={{ backgroundColor: "#65AAEA" }}
							label={year}
						/>
					);
				})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: "15%",
	},
	header: {},
	yearsContainer: {
		gap: 10,
	},
});
