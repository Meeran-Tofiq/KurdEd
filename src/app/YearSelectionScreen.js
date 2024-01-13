import React from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import ContinueButton from "../components/ContinueButton";
import graduationHatImage from "../../assets/graduation-hat-small.png";

export default function YearSelectionScreen({ navigation }) {
	const years = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image
					source={graduationHatImage}
					style={styles.image}
					resizeMode="cover"
				/>
				<Text>قۆناغەکان :</Text>
			</View>
			<View style={styles.yearsContainer}>
				<FlatList
					data={years}
					renderItem={({ item: year }) => (
						<ContinueButton
							onPressFunc={() => navigation.goBack()}
							extraStyles={styles.yearButton}
							label={year}
						/>
					)}
					style={styles.flatList}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		paddingTop: "25%",
		paddingBottom: "10%",
	},
	header: {
		width: "100%",
		alignItems: "center",
	},
	image: {
		width: 100,
		height: 100,
	},
	yearsContainer: {
		gap: 10,
		width: "100%",
		alignItems: "center",
	},
	yearButton: {
		alignSelf: "center",
		backgroundColor: "#65AAEA",
		marginVertical: 5,
	},
	flatList: {
		width: "100%",
	},
});
