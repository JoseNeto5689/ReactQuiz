import React, { BackHandler } from "react";
import { Text, StyleSheet, TouchableHighlight, Alert } from "react-native";

export default function( { content, action } ){
    
    return <>
        <TouchableHighlight style = { styles.optionBox } underlayColor = { "#D44426" } onPress = { () => {action()} } >
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