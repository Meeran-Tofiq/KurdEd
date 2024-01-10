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
		<View>
			<View
				style={
					hasSubscribed ? styles.imageContainer : styles.lockedImageContainer
				}
			>
				{/* Fotn Awesome Lock icon goes here */}
				<Image source={course.img} />
			</View>
			<View>
				<Text>
					{course.duration.hours} کاتژمێر و {course.duration.minutes} خولەک
				</Text>
				<Text>{course.title}</Text>
				<Text>{course.desc}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	lockedImageContainer: {},
	imageContainer: {},
	courseInfoContainer: {},
});
