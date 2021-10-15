import React from "react";
import { Text, StyleSheet, Image } from "react-native";

export default function(){
    return <>
        <Text>Parabéns! Você Venceu!</Text>
        <Image source = { require("../src/spamton.gif") } resizeMode = "cover" height = {"20%"} />
    </>
}