import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import clock from "../src/clock-reduzido.png"
import { OpenSans_700Bold, useFonts } from "@expo-google-fonts/open-sans";
import AppLoading from "expo-app-loading";

export default function({time}) {
    let [fontsLoaded] = useFonts({
        OpenSans_700Bold
    })
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return <>
        <View style = { styles.container } >
            <Image source = { clock } style= { { resizeMode: "cover" } } />
            <Text style = { styles.timer }> {time} </Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
      height: 400,
      alignItems: 'center',
      marginTop: 20,
    },
    timer: {
        fontFamily: "OpenSans_700Bold",
        fontSize: 26,
        color: "red"
    }
  });