import React from "react";
import Option from "./option";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { Inter_400Regular ,Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { OpenSans_400Regular } from "@expo-google-fonts/open-sans";
import AppLoading from 'expo-app-loading';

export default function({ option1, option2, option3, option4, op1,op2,op3,op4, navigation}){
  
const verify = (num) => {
  if(num === 0){
    navigation.navigate("Error")
  }
  if(num === 1){
  navigation.navigate("WinScreen")
  }
}

return <>
    <View style = { styles.container } >
      <TouchableHighlight style = { styles.optionBox } underlayColor = { "#D44426" } onPress = { () => {verify(op1)} } >
              <Text style = { styles.optionText } > { option1 } </Text>
      </TouchableHighlight>
      <TouchableHighlight style = { styles.optionBox } underlayColor = { "#D44426" } onPress = { () => {verify(op2)} } >
              <Text style = { styles.optionText } > { option2 } </Text>
      </TouchableHighlight>
      <TouchableHighlight style = { styles.optionBox } underlayColor = { "#D44426" } onPress = { () => {verify(op3)} } >
              <Text style = { styles.optionText } > { option3 } </Text>
      </TouchableHighlight>
      <TouchableHighlight style = { styles.optionBox } underlayColor = { "#D44426" } onPress = { () => {verify(op4)} } >
              <Text style = { styles.optionText } > { option4 } </Text>
      </TouchableHighlight>
    </View>
</>
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: 20,
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
  });