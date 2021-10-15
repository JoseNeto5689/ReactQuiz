import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Inter_400Regular ,Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { OpenSans_400Regular } from "@expo-google-fonts/open-sans";
import AppLoading from 'expo-app-loading';

export default function({ questionNum, questionText }){

    let [fontsLoaded] = useFonts({
        Inter_900Black, Inter_400Regular, OpenSans_400Regular
    })
    
    if (!fontsLoaded) {
        return <AppLoading />
    }
    return <>
    <View>
        <Text style = { styles.questionNumber } > { questionNum } </Text>
        <Text style = { styles.questionText }>{ questionText }</Text>
    </View>
    </>
    

}
const styles = StyleSheet.create({
    questionNumber: {
        textAlign: "center",
        marginVertical: 20,
        fontFamily: "Inter_900Black",
        fontSize: 28,
        textDecorationLine: "underline",
    },
    questionText: {
        fontFamily: "Inter_400Regular",
        fontSize: 22,
        margin: 10,
        textAlign: "center"
        
    }
})