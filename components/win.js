import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import Option from "./option";

export default function({ navigation }){
    return <>
        <View style = { styles.container } >
            <Text style = { styles.congratulations } >Parabéns! Você Venceu!</Text>
            <Image source = { require("../src/spamton.gif")} style = { styles.image } />
            <Option content = {"Voltar ao menu"} action = { () => { navigation.navigate("HomeScreen") } }/>
        </View>
    </>
}

const styles = StyleSheet.create({
    image: {
        resizeMode: "contain",
        width: 260,
        height: 260,
        marginBottom: 20,
    },
    congratulations: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 20,
        color: "#0EF043",
        fontWeight: "bold"
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#637373"
    },

})