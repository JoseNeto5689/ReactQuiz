import React from "react";
import { View, Text, StyleSheet, Image, StatusBar, BackHandler, TouchableHighlight } from "react-native";
import Option from "./option";
import styles from "./styles";

export default function({ navigation }) {
    return <>
        <StatusBar/>
        <View style = {styles.main} >
            <Image source = { require("../src/brain-reduzido.png") }/>
            <Text style = { styles.quizText} >React Native Quiz!</Text>
            <View>
            <Option content = { "Iniciar Jogo" } action = { () => { navigation.navigate("Question01") } } />
            <Option content = { "Sair do Jogo" } action = { () => { BackHandler.exitApp() } } />
            </View>
        </View>
    </>
}
