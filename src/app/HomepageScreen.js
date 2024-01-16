import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import HomepageCourses from "../components/HomepageCourses";
import HomepageProfile from "../components/HomepageProfile";
import HomepageSettings from "../components/HomepageSettings";
import Footer from "../components/Footer";

export default function HomepageScreen({ navigation }) {
	const [selectedPage, setSelectedPage] = useState(0);
	const pages = [
		<HomepageCourses navigation={navigation} />,
		<HomepageProfile navigation={navigation} />,
		<HomepageSettings navigation={navigation} />,
	];

	return (
		<View>
			<View style={styles.content}>{pages[selectedPage]}</View>
			<View>
				<Footer
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	content: {
		height: "100%",
		padding: 15,
		paddingTop: 25,
		alignItems: "center",
		paddingBottom: 75,
	},
});
