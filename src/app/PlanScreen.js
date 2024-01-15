import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import BackButton from "../components/BackButton";
import checkbox from "../../assets/checked-checkbox.png";
import ContinueButton from "../components/ContinueButton";

export default function PlanScreen({ navigation }) {
	const plans = [
		{
			duration: "١",
			guarantee: "١٠",
			price: "١٥،٠٠٠",
		},
		{
			duration: "٦",
			guarantee: "٢٠",
			price: "٧٠،٠٠٠",
		},
	];
	const [plan, setPlan] = useState({ ...plans[0] });

	const handleChangePlan = (index) => {
		if (plan.duration !== plans[index].duration) {
			setPlan({ ...plans[index] });
		}
	};

	const handleJoinPlan = () => {
		navigation.navigate("Courses", { hasSubscribed: true });
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<BackButton style={styles.backButton} navigation={navigation} />
			</View>

			<View style={styles.plansContainer}>
				<Pressable
					style={[
						styles.planButton,
						plan.duration === plans[0].duration &&
							styles.selectedPlan,
					]}
					onPress={() => handleChangePlan(0)}
				>
					<Text
						style={[
							styles.plans,
							plan.duration === plans[0].duration &&
								styles.selectedPlan,
						]}
					>
						١ مانگ
					</Text>
				</Pressable>
				<Pressable
					style={[
						styles.planButton,
						plan.duration === plans[1].duration &&
							styles.selectedPlan,
					]}
					onPress={() => handleChangePlan(1)}
				>
					<Text
						style={[
							styles.plans,
							plan.duration === plans[1].duration &&
								styles.selectedText,
						]}
					>
						٦ مانگ
					</Text>
				</Pressable>
			</View>

			<View style={styles.plan}>
				<Text style={styles.planCurrency}>
					دینار / {plan.duration} مانگ
				</Text>
				<Text style={styles.planPrice}>{plan.price}</Text>
			</View>

			<View style={styles.plansDescription}>
				<Text style={{ alignSelf: "center", fontSize: 14 }}>
					ناوەڕۆکی پلانەکە
				</Text>
				<View style={styles.benefitsContainer}>
					<Text style={styles.benefitsText}>
						هەموو کۆرسەکان بۆ مانگێک
					</Text>
					<Image source={checkbox} style={styles.checkbox} />
				</View>
				<View style={styles.benefitsContainer}>
					<Text style={styles.benefitsText}>
						هەڵسەنگاندن لەگەڵ هەموو وانەیەک
					</Text>
					<Image source={checkbox} style={styles.checkbox} />
				</View>
				<View style={styles.benefitsContainer}>
					<Text style={styles.benefitsText}>
						{plan.guarantee} ڕۆژ گرەنتی
					</Text>
					<Image source={checkbox} style={styles.checkbox} />
				</View>
			</View>

			<ContinueButton
				label={"بەشداریکردن لە پلان"}
				onPressFunc={handleJoinPlan}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
		width: "100%",
	},
	header: {
		width: "100%",
		paddingHorizontal: 20,
	},
	backButton: {},
	headText: {
		fontWeight: "bold",
		fontSize: 24,
	},
	plansContainer: {
		flexDirection: "row-reverse",
		borderWidth: 1,
		borderColor: "rgb(130,130,130)",
		borderRadius: 16,
		gap: 20,
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
	planButton: {
		paddingHorizontal: 24,
		paddingVertical: 16,
		borderWidth: 1,
		borderColor: "rgba(0,0,0,0)",
	},
	plans: {
		fontSize: 24,
	},
	selectedPlan: {
		backgroundColor: "rgb(237,223,188)",
		borderRadius: 16,
		borderColor: "rgb(130,130,130)",
	},
	selectedText: {
		color: "rgb(227,86,42)",
	},
	plan: {
		flexDirection: "row",
		alignItems: "flex-end",
	},
	planCurrency: {
		fontSize: 20,
		color: "rgb(90,90,90)",
	},
	planPrice: {
		fontWeight: "bold",
		fontSize: 40,
	},
	plansDescription: {
		gap: 16,
		paddingHorizontal: 32,
		paddingVertical: 24,
		backgroundColor: "#ffffff",
		borderRadius: 10,
		elevation: 4,
	},
	benefitsContainer: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		gap: 10,
	},
	benefitsText: {
		fontSize: 16,
	},
	checkbox: {
		width: 32,
		height: 32,
	},
});
