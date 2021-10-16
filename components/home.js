import React from "react";
import { View, Text, StyleSheet, Image, StatusBar, BackHandler, TouchableHighlight } from "react-native";

export default function({ navigation }) {
    return <>
        <StatusBar/>
        <View style = {styles.main} >
            <Image source = { require("../src/brain-reduzido.png") }/>
            <Text style = { styles.quizText} >React Native Quiz!</Text>
            <View>
                <TouchableHighlight style = { styles.optionBox } underlayColor = { "#D44426" } onPress = { () => { navigation.navigate("Question01") } } >
                    <Text style = { styles.optionText } >Inicar Jogo</Text>
                </TouchableHighlight>
                <TouchableHighlight style = { styles.optionBox } underlayColor = { "#D44426" } onPress = { () => { BackHandler.exitApp() } } >
                    <Text style = { styles.optionText } >Sair do Jogo</Text>
                </TouchableHighlight>
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
    },
    optionBox: {
        height: 60,
        width: 270,
        backgroundColor: "orange",
        borderColor: "#D44426",
        borderWidth: 6,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
      },
      optionText: {
        fontSize: 20,
        color: "#201F1F",
        fontWeight: "bold",
      }
})
