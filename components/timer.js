import React from "react";
import { Text, Image, View } from "react-native";
import clock from "../src/clock-reduzido.png"
import { OpenSans_700Bold, useFonts } from "@expo-google-fonts/open-sans";
import AppLoading from "expo-app-loading";
import styles from "./styles";

export default function({time}) {
    let [fontsLoaded] = useFonts({
        OpenSans_700Bold
    })
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return <>
        <View style = { styles.timerContainer } >
            <Image source = { clock } style= { { resizeMode: "cover" } } />
            <Text style = { styles.timer }> {time} </Text>
        </View>
    </>
}