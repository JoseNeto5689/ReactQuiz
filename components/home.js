import React from "react";
import Option from "./option"
import { View, Text, StyleSheet, Image, StatusBar, BackHandler } from "react-native";

export default function() {
    return <>
        <StatusBar/>
        <View style = {styles.main} >
            <Image source = { require("../src/brain-reduzido.png") }/>
            <Text style = { styles.quizText} >React Native Quiz!</Text>
            <View>
                <Option content = { "Iniciar Quiz" } action = { () => {} } />
                <Option content = { "Sair do Quiz" } action = { () => { BackHandler.exitApp() } }/>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    main: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        marginBottom: "30%"

    },
    quizText: {
        fontSize: 20,
        fontWeight: "bold"
    }
})
