import React from "react";
import { Text, StyleSheet, TouchableHighlight, Alert } from "react-native";

export default function( { content } ){
    return <>
        <TouchableHighlight style = { styles.optionBox } onPress = { () => { alert("Acertou!") }  } underlayColor = { "#D44426" } >
            <Text style = { styles.optionText } > { content } </Text>
        </TouchableHighlight>
    </>
}

const styles = StyleSheet.create({
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