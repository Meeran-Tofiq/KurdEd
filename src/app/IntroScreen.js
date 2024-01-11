import React, { useState } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import SkipButton from "../components/SkipButton";
import img1 from "../../assets/globe-smiling.png";
import img2 from "../../assets/magnifying-glass.png";
import img3 from "../../assets/shooting-rocket.png";
import ContinueButton from "../components/ContinueButton";

export default function IntroScreen({ navigation }) {
	const [pageNo, setPageNo] = useState(0);
	const images = [img1, img2, img3];
	const titles = [
		"بخوێنە لە هەر شوێنێکبیت!",
		"وانەکەت بدۆزەرەوە بەبێ هیچ سنوورێک!",
		"باوەڕت بە خۆت هەبێت!",
	];
	const descs = [
		"لە ماڵەوەیت و ناتوانیت بخوێنیت؟ پێویستت بە یارمەتییە لە خوێندندا و نازانی لەکوێوە داوای یارمەتی بکەیت؟",
		"ئێمە گرینگیت پێ دەدەین چونکە تۆ شایستەی باشترینیت	بۆیە ئێمە هەموو وانەکان دەخەینە بەردەستت!	لە قۆناغەکانی ١ هەتا ١٢ !",
		"ئێمە ئەزانین تۆ بەهرەداریت! بۆیە لەگەڵ هەموو وانەیەک دەتوانیت تاقیکردنەوە بکەیت و خۆت هەڵسەنگێنیت لە کۆتایی وانەکان!",
	];

	const handleIncreasingPage = () => {
		if (pageNo < images.length - 1) setPageNo(pageNo + 1);
		else navigation.navigate("Login Page");
	};

	return (
		<View style={styles.container}>
			{/* ^this will be the container of the entire intro 1*/}
			<SkipButton onPressFunc={() => navigation.navigate("Login Page")} />
			<View style={styles.imageContainer}>
				<Image source={images[pageNo]} />
			</View>
			<View style={styles.textContaienr}>
				<Text style={styles.title}>{titles[pageNo]}</Text>
				<Text style={styles.desc}>{descs[pageNo]}</Text>
			</View>
			<View style={styles.paginationContainer}>
				<View
					style={[styles.paginationItem, pageNo === 1 && styles.activePill]}
				></View>
				<View
					style={[styles.paginationItem, pageNo === 2 && styles.activePill]}
				></View>
				<View
					style={[styles.paginationItem, pageNo === 3 && styles.activePill]}
				></View>
			</View>
			<ContinueButton
				label={pageNo < 2 ? "دواتر" : "با بخوێنین!"}
				onPressFunc={handleIncreasingPage}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		gap: 30,
	},
	imageContainer: {},
	textContaienr: {
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "700",
		textAlign: "center",
	},
	desc: {
		alignItems: "center",
		textAlign: "center",
	},
	paginationContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
		backgroundColor: "red",
	},
	paginationItem: {
		width: 12,
		height: 12,
		borderRadius: 6,
		backgroundColor: "gray",
		marginHorizontal: 5,
	},
	activePill: {
		borderRadius: 8,
		width: 20,
	},
});
