import React, { useState } from "react";
import { View, Text, FlatList, Switch, StyleSheet } from "react-native";

function SettingsOption({ isNotif, settingOption, handleChangeFunc }) {
	const [isEnabled, setIsEnable] = useState(false);

	if (isNotif) {
		return (
			<View style={styles.container}>
				<Text>ئاگادارکردنەوە</Text>
				<Switch
					trackColor={{ false: "#767577", true: "#5BA092" }}
					thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
					ios_backgroundColor="#3e3e3e"
					onValueChange={() => {
						handleChangeFunc();
						setIsEnable(!isEnabled);
					}}
					value={isEnabled}
				/>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			{/* Icon goes here */}
			<View style={styles.textContainer}>
				<Text style={styles.settingsTitle}>{settingOption.title}</Text>
				<Text style={styles.settingsDesc}>{settingOption.desc}</Text>
			</View>
			{/* Arrow goes here */}
		</View>
	);
}

export default function SettingsOptions({ account }) {
	const [settings, setSettings] = useState({
		allowNotifs: false,
		account,
	});

	const handleNotifChange = () => {
		setSettings({
			...settings,
			allowNotifs: !settings.allowNotifs,
		});
	};

	const handleNameChange = (newName) => {
		setSettings({
			...settings,
			account: {
				...account,
				name: newName,
			},
		});
	};

	const handleEmailChange = (newEmail) => {
		setSettings({
			...settings,
			account: {
				...account,
				email: newEmail,
			},
		});
	};

	const handlePasswordChange = (newPassword) => {
		setSettings({
			...settings,
			account: {
				...account,
				password: newPassword,
			},
		});
	};

	const settingsOptions = [
		{
			id: "0",
			title: "ئاگادارکردنەوە",
			handleChangeFunc: handleNotifChange,
		},
		{
			id: "1",
			title: "ناو",
			desc: "دیلان ئەحمەد میران محەمەد",
			handleChangeFunc: handleNameChange,
		},
		{
			id: "2",
			title: "ئیمەیڵ",
			desc: "dilan123@gmail.com",
			handleChangeFunc: handleEmailChange,
		},
		{
			id: "3",
			title: "پاسۆرد",
			desc: "٢ هەفتە لەمەوپێش گۆڕاوە",
			handleChangeFunc: handlePasswordChange,
		},
	];

	return (
		<FlatList
			data={settingsOptions}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<SettingsOption
					isNotif={item.title === "ئاگادارکردنەوە"}
					settingOption={item}
					handleChangeFunc={item.handleChangeFunc}
				/>
			)}
			style={styles.flatList}
		/>
	);
}

const styles = StyleSheet.create({
	flatList: {
		width: "95%",
	},
	container: {
		padding: 15,
		marginVertical: 10,
		borderWidth: 1,
		borderRadius: 15,
		borderColor: "grey",
		flexDirection: "row-reverse",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
