import React, { useState } from "react";
import { Image, View, Text } from "react-native";
import SkipButton from "../components/SkipButton";
import img1 from "../../assets/globe-smiling.png";
import img2 from "../../assets/magnifying-glass.png";
import img3 from "../../assets/shooting-rocket.png";
import ContinueButton from "../components/ContinueButton";

export default function Intro({}) {
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
	};

	return (
		<View>
			{/* ^this will be the container of the entire intro 1*/}
			<SkipButton />
			<View>
				<Image source={images[pageNo]} />
			</View>
			<View>
				<Text>{titles[pageNo]}</Text>
				<Text>{descs[pageNo]}</Text>
			</View>
			<View>{/* pagination space */}</View>
			<ContinueButton
				label={pageNo < 2 ? "دواتر" : "با بخوێنین!"}
				onPressFunc={handleIncreasingPage}
			/>
		</View>
	);
}
