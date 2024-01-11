import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import SkipButton from "../components/SkipButton";
import woman from "../../assets/kurdish-woman-holding-book.png";
import facebookLogo from "../../assets/facebook-logo.png";
import instagramLogo from "../../assets/instagram-logo.png";
import googleLogo from "../../assets/google-logo.png";
import loginLogo from "../../assets/login-logo.png";
import alternateLoginLogo from "../../assets/alternate-login-text.png";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');

    const handleEmailText = (inputEmail) => {
        setEmail(inputEmail);
    };

    return (
        <View style={styles.container}>
            <SkipButton onPressFunc={() => navigation.navigate("Courses")} extraStyles={styles.skipButton} />
            <View>
                <Image source={woman} style={styles.womanImage} />
            </View>

            <Image source={loginLogo} style={styles.loginLogo} />
            <Image source={alternateLoginLogo} style={{resizeMode: "contain"}}/>

            <View style={styles.loginIconsContainer}>
                <Image source={facebookLogo} style={styles.loginIcon}/>
                <Image source={instagramLogo} style={styles.loginIcon}/>
                <Image source={googleLogo} style={styles.loginIcon}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    womanImage: {
        width: 215,
        height: 230,
        marginTop: -330, 
    },
    skipButton: {
        top: 40,
        right: 20,
        backgroundColor: "rgb(217,217,217)",
        paddingHorizontal: 20,
        paddingVertical: 2,
        borderRadius: 20,
    },
    loginLogo: {
        marginTop: -80,
    },
    loginIconsContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 24,
    },
    loginIcon: {
        width: 48,
        height: 48
    }
})