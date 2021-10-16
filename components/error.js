import React from "react";
import { Modal, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Question from './question';
import OptionBox from "./optionBox"
import Timer from "./timer"

export default function({navigation}) {
    return <>
        <Modal transparent = { true } animationType = "slide">
            <View style = { styles.modalView } >
                <View style = {styles.failBox}>
                    <Text style = { styles.failTitle } > Você falhou! </Text>
                    <Text style = { styles.failMsg }> Deseja tentar novamente? </Text>
                    <View style = { styles.failOptions }>
                        <TouchableOpacity style = { styles.yes } onPress = { () => { navigation.navigate("HomeScreen") } } >
                            <Text style = { styles.text } >Sim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = { styles.no } >
                            <Text style = { styles.text } >Não</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    </>
}

const styles = StyleSheet.create({
    modalView: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        justifyContent: "center",
    },
    failBox: {
        height: "25%",
        width: "80%",
        backgroundColor: "#2596be",
        borderRadius: 20,
        borderWidth: 4,
        borderColor: "yellow",
        marginBottom: "30%",
    },
    failTitle: {
        textAlign: "center",
        marginTop: 30,
        fontSize: 24,
        color: "red",
        fontWeight: "bold",
    },
    failMsg: {
        marginTop: 10,
        textAlign: "center",
        fontSize: 22,
        color: "white",
    },
    failOptions:{
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "center",
    },
    yes: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 5,
        marginHorizontal: 10,
        backgroundColor: "green",
    },
    no: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 5,
        marginHorizontal: 10,
        backgroundColor: "red",
    },
    text: {
        color: "white",
        fontWeight: "bold"
    }
})