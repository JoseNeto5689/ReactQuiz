import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from "react-native";

export default function({ action, content, boxStyle, textStyle }) {
    return <>
        <TouchableHighlight style = { [styles.optionBox, boxStyle.index ] } underlayColor = { "#D44426" } onPress = { () => { action() } } >
                  <Text style = { [styles.optionText, textStyle.index] } > { content } </Text>
          </TouchableHighlight>
    </>
}

const styles = StyleSheet.create({
    optionBox: {
        height: 60,
        width: 300,
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