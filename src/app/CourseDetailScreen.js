import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BackButton from "../components/BackButton";
import ContinueButton from "../components/ContinueButton";
import StarRating from "react-native-star-rating";

export default function CourseDetailScreen({ navigation, route }) {
	const { course } = route.params;
	const rating = 3.5;

	const handleContinueButton = () => {
		navigation.navigate("Course Lessons Screen");
	};

	return (
		<View style={styles.container}>
			<BackButton
				navigation={navigation}
				extraStyles={styles.backButton}
			/>
			<Image source={course.img} style={styles.courseImage} />
			<View style={styles.courseDetailsContainer}>
				<View style={styles.courseDescriptionContainer}>
					<Text style={styles.courseDescriptionText}>
						دەربارەی وانەکە
					</Text>
					<Text style={styles.courseDescription}>{course.desc}</Text>
				</View>
				<View style={styles.courseTimeContainer}>
					<Text style={styles.courseTime}>کات</Text>
					<Text>
						{course.duration.hours} کاتژمێر و{" "}
						{course.duration.minutes} خولەک
					</Text>
				</View>
				<View style={styles.instructorContainer}>
					<Text style={styles.instructorText}>وانەبێژ</Text>
					<Text style={styles.instructorTitle}>{course.title}</Text>
				</View>
				<View style={styles.ratingContainer}>
					<Text>{rating}</Text>
					<StarRating
						disabled={false}
						maxStars={5}
						rating={rating}
						fullStarColor={"black"}
						emptyStarColor={"gray"}
						starSize={20}
					/>
				</View>
			</View>
			<ContinueButton
				label={"دەستپێبکە!"}
				extraStyles={{ alignSelf: "center" }}
				onPressFunc={handleContinueButton}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-evenly",
	},
	backButton: {
		marginLeft: 10,
	},
	courseImage: {
		width: "100%",
		height: 180,
	},
	courseDetailsContainer: {
		alignItems: "flex-end",
		marginHorizontal: 16,
	},
	courseDescriptionContainer: {
		gap: 4,
		marginTop: 16,
		marginBottom: 8,
	},
	courseDescriptionText: {
		fontSize: 24,
	},
	courseDescription: {
		fontSize: 14,
	},
	courseTimeContainer: {
		gap: 4,
		marginVertical: 16,
	},
	courseTime: {
		fontSize: 20,
	},
	instructorContainer: {
		marginVertical: 16,
		gap: 4,
	},
	instructorText: {
		fontSize: 20,
	},
	ratingContainer: {
		flexDirection: "row",
		gap: 8,
	},
});
