import React from "react";
import { Modal, Text, StyleSheet, View, TouchableHighlight } from "react-native";
import styles from "./styles";

export default function({navigation}) {
    return <>
        <Modal transparent = { true } animationType = "fade">
            <View style = { styles.modalView } >
                <View style = {styles.failBox}>
                    <Text style = { styles.failTitle } > Você falhou! </Text>
                    <Text style = { styles.failMsg }> Deseja tentar novamente? </Text>
                    <View style = { styles.failOptions }>
                        <TouchableHighlight style = { styles.yes } onPress = { () => { navigation.navigate("HomeScreen") } } >
                            <Text style = { styles.textFail } >Sim</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = { styles.no } >
                            <Text style = { styles.textFail } >Não</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </Modal>
    </>
}
