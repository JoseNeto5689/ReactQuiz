import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Inter_400Regular ,Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { OpenSans_400Regular } from "@expo-google-fonts/open-sans";
import AppLoading from 'expo-app-loading';
import styles from "./styles";

export default function({ questionNum, questionText, questionStyle }){

    let [fontsLoaded] = useFonts({
        Inter_900Black, Inter_400Regular, OpenSans_400Regular
    })
    
    if (!fontsLoaded) {
        return <AppLoading />
    }
    return <>
    <View>
        <Text style = { styles.questionNumber } > { questionNum } </Text>
        <Text style = { [styles.questionText, questionStyle.index] }>{ questionText }</Text>
    </View>
    </>
    

}