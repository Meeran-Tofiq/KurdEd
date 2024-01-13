import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import LessonOption from "./LessonOption";

export default function LessonDropDown({ navigation, dropdownLabel, lessons }) {
	const [isVisible, setIsVisible] = useState(false);
	return (
		<View style={styles.container}>
			<Pressable
				style={styles.dropdown}
				onPress={() => setIsVisible(!isVisible)}
			>
				<Text>{dropdownLabel}</Text>
			</Pressable>

			<View
				style={isVisible ? styles.lessons : [styles.lessons, { height: 0 }]}
			>
				{lessons.map((lesson, i) => {
					return (
						<LessonOption
							key={i}
							label={lesson.label}
							onPressFunc={() => navigation.navigate(lesson.link)}
						/>
					);
				})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
