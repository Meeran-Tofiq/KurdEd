import courseImage from "../../../assets/cool-kids-discussion.png";

/**
 * @typedef {Object} course
 * @property {string} title
 * @property {string} desc
 * @property {object} duration
 * @property {object} img
 */

const courses = [
	{
		title: "بیرکاری - مامۆستا ئەحمەد",
		desc: "داتاشراوە و تەواوکاری",
		duration: {
			hours: 10,
			minutes: 34,
		},
		img: courseImage,
		sections: [
			{
				label: "بەندی ١",
				lessons: [
					{ label: "جێناو", link: "" },
					{ label: "ئامڕاز", link: "" },
					{ label: "بکەر نادیار", link: "" },
				],
			},
			{
				label: "بەندی ٢",
				lessons: [
					{ label: "کار", link: "" },
					{ label: "جێناوی داهاتوو", link: "" },
					{ label: "بکەر نادیار", link: "" },
				],
			},
		],
	},
	{
		title: "Sunrise - مامۆستا ئەحمەد",
		desc: "داتاشراوە و تەواوکاری",
		duration: {
			hours: 10,
			minutes: 34,
		},
		img: courseImage,
		sections: [
			{
				label: "بەندی ١",
				lessons: [
					{ label: "جێناو", link: "" },
					{ label: "ئامڕاز", link: "" },
					{ label: "بکەر نادیار", link: "" },
				],
			},
			{
				label: "بەندی ٢",
				lessons: [
					{ label: "کار", link: "" },
					{ label: "جێناوی داهاتوو", link: "" },
					{ label: "بکەر نادیار", link: "" },
				],
			},
		],
	},
	{
		title: "زانست بۆ هەمووان - مامۆستا میران",
		desc: "داتاشراوە و تەواوکاری",
		duration: {
			hours: 10,
			minutes: 34,
		},
		img: courseImage,
		sections: [
			{
				label: "بەندی ١",
				lessons: [
					{ label: "جێناو", link: "" },
					{ label: "ئامڕاز", link: "" },
					{ label: "بکەر نادیار", link: "" },
				],
			},
			{
				label: "بەندی ٢",
				lessons: [
					{ label: "کار", link: "" },
					{ label: "جێناوی داهاتوو", link: "" },
					{ label: "بکەر نادیار", link: "" },
				],
			},
		],
	},
];

export default courses;
