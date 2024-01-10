import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function CourseCard({ course, hasPaid }) {
	return (
		<View>
			<View
				style={hasPaid ? styles.imageContainer : styles.unpaidImageContainer}
			>
				{/* Fotn Awesome Lock icon goes here */}
				<Image source={course.img} />
			</View>
			<View>
				<Text>
					{course.duration.minutes} خولەک {course.duration.hours} کاتژمێر
				</Text>
				<Text>{course.title}</Text>
				<Text>{course.desc}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	unpaidImageContainer: {},
	imageContainer: {},
	courseInfoContainer: {},
});
