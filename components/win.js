import React from "react";
import { Text, StyleSheet, Image, View, TouchableHighlight } from "react-native";

export default function({ navigation }){
    return <>
        <View style = { styles.container } >
            <Text style = { styles.congratulations } >Parabéns! Você Venceu!</Text>
            <Image source = { require("../src/spamton.gif")} style = { styles.image } />
            <TouchableHighlight style = { styles.optionBox } underlayColor = { "#D44426" } onPress = { () => { navigation.navigate("HomeScreen") } } >
                  <Text style = { styles.optionText } > Voltar ao Menu </Text>
            </TouchableHighlight>
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