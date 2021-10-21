import React from "react";
import { View, Text, StyleSheet, Image, StatusBar, BackHandler, TouchableHighlight } from "react-native";
import Option from "./option";
import styles from "./styles";

export default function({ navigation }) {
    return <>
        <StatusBar/>
        <View style = {styles.home} >
            {/*<Image source = { require("../src/brain-reduzido.png") }/>*/}
            <Text style = { styles.quizText} >{"Now's your chance to be a \n [BIG SHOT]"}</Text>
            <Image source = { require("../src/spamton-quiz.png") } style = { styles.homeScreenImage } />
            
            <View>
            <Option content = { "Iniciar Jogo" } action = { () => { navigation.navigate("Question01") } } />
            <Option content = { "Sair do Jogo" } action = { () => { BackHandler.exitApp() } } />
            </View>
        </View>
    </>
}
