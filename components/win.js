import React from "react";
import { Text, StyleSheet, Image, View, TouchableHighlight } from "react-native";
import Option from "./option";
import styles from "./styles";

export default function({ navigation }){
    return <>
        <View style = { styles.winContainer } >
            <Text style = { styles.congratulations } >{"Parabéns! Você Venceu! \n Você acaba de ganhar \n $ 1 KROMER $ "}</Text>
            <Image source = { require("../src/spamton.gif")} style = { styles.congratulationsImage } />
            <Option content = { "Voltar ao Menu" } action = { () => { navigation.navigate("HomeScreen") } } />
        </View>
    </>
}
