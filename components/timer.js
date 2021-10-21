import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import clock from "../src/timer.png"
import { OpenSans_700Bold, OpenSans_600SemiBold,  useFonts } from "@expo-google-fonts/open-sans";
import AppLoading from "expo-app-loading";
import styles from "./styles";

export default function({time}) {
    let alarm
    let [fontsLoaded] = useFonts({
        OpenSans_700Bold, OpenSans_600SemiBold
    })
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    if(time<=5){
        alarm = styles.alarm
    }
    return <>
        <View style = { [styles.timerContainer] } >
            <Image source = { clock } style= { { resizeMode: "cover" } } />
            <Text style = { [styles.timer, alarm] }> {time} </Text>
        </View>
    </>
}