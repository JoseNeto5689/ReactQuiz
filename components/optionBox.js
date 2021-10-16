import React from "react";
import Option from "./option";
import { View, StyleSheet } from "react-native";

export default function({ option1, option2, option3, option4, op1,op2,op3,op4, navigation}){
const verify = (num) => {
  if(num === 0){
    navigation.navigate("Error")
  }
  if(num === 1){
  navigation.navigate("WinScreen")
  }
}

    return (
    <View style = { styles.container } >
      <Option content = { option1 } action = { () => {verify(op1)} } />
      <Option content = { option2 } action = { () => {verify(op2)} }/>
      <Option content = { option3 } action = { () => {verify(op3)} }/>
      <Option content = { option4 } action = { () => {verify(op4)} }/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      //backgroundColor: "blue",
      alignItems: 'center',
      marginTop: 20,
    }
  });