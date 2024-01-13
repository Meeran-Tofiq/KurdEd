import React from "react";
import { View } from "react-native";
import { Svg, Path } from "react-native-svg";

function CoursesSVG() {
	return (
		<View>
			<Svg
				width="24"
				height="20"
				viewBox="0 0 24 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<Path
					d="M3.35714 0C3.15714 0 2.98571 0.025 2.81429 0.075C1.7 0.275 0.814286 1.05 0.585714 2.025C0.5 2.175 0.5 2.325 0.5 2.5V16.25C0.5 18.325 2.41429 20 4.78571 20H20.5V17.5H4.78571C3.98571 17.5 3.35714 16.95 3.35714 16.25C3.35714 15.55 3.98571 15 4.78571 15H20.5V1.25C20.5 0.55 19.8714 0 19.0714 0H17.6429V7.5L14.7857 5L11.9286 7.5V0H3.35714Z"
					fill="#E3562A"
				/>
			</Svg>
		</View>
	);
}

export { CoursesSVG };
