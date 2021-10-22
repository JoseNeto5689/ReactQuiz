import React from "react";
import { View, Text, Image, StatusBar, BackHandler, ImageBackground } from "react-native";
import Option from "./option";
import styles from "./styles";

export default function({ navigation }) {
    return <>
        <StatusBar/>
        {/*<ImageBackground source = { background } resizeMode = "cover" style = {{ width: "100%", height: "100%" }}>*/}
            <View style = {styles.home}>
                {/*<Image source = { require("../src/brain-reduzido.png") }/>*/}
                <Text style = { styles.quizText} >{"Now's your chance to be a \n"} <Text style = {{ color: "red" }}>[BIG SHOT]</Text></Text>
                <Image source = { require("../src/spamton-quiz.png") } style = { styles.homeScreenImage } />
                <View>
                <Option content = { "Iniciar Jogo" } action = { () => { navigation.navigate("Question01") } } />
                <Option content = { "Sair do Jogo" } action = { () => { BackHandler.exitApp() } } />
                </View>
            </View>
        {/*</ImageBackground>*/}
    </>
}
