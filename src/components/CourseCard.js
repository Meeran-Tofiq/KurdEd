import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

/**
 * @typedef {Object} course
 * @property {string} title
 * @property {string} desc
 * @property {object} duration
 * @property {object} img
 */

/**
 * Make a course card to display on the page.
 * @param {Object} props - The props object.
 * @param {course} props.course - The course object.
 * @param {boolean} props.hasSubscribed - Whether the user has subscribed.
 * @returns {JSX.Element} Course card component to render.
 */
export default function CourseCard({ course, hasSubscribed }) {
	return (
		<View style={styles.courseCard}>
			<View
				style={
					hasSubscribed
						? styles.imageContainer
						: [styles.imageContainer, styles.locked]
				}
			>
				{/* Fotn Awesome Lock icon goes here */}
				<Image source={course.img} style={styles.courseImage} />
				{!hasSubscribed && <View style={styles.overlay} />}
			</View>
			<View style={styles.courseInfoContainer}>
				<Text style={styles.durationText}>
					{course.duration.hours} کاتژمێر و {course.duration.minutes} خولەک
				</Text>
				<Text style={styles.titleText}>{course.title}</Text>
				<Text style={styles.descText}>{course.desc}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	courseCard: {
		borderWidth: 1,
		borderColor: "grey",
		borderRadius: 15,
		marginVertical: 15,
		overflow: "hidden",
	},
	courseImage: {
		width: "100%",
		height: 180,
	},
	locked: {
		opacity: 0.5,
	},
	imageContainer: {
		padding: 15,
		backgroundColor: "#F8F2EE",
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.75)",
	},
	courseInfoContainer: {
		padding: 10,
		backgroundColor: "white",
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		alignItems: "flex-end",
	},
	durationText: {
		color: "#5BA092",
		fontSize: 12,
	},
	titleText: {
		fontSize: 22,
	},
	descText: {
		color: "grey",
	},
});
