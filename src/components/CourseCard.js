import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function CourseCard({ course }) {
	return (
		<View>
			<View>
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
	imageContainer: {},
	courseInfoContainer: {},
});
