import React, { useEffect } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import styles from "./SplashScreenStyles";

export default function SplashScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require("../assets/listen.png")} // coloque seu logo em assets/logo.png
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <Text style={styles.text}>PLAYLIST</Text>
            <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
        </View>
    );
}
